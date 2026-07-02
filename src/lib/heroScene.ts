// src/lib/heroScene.ts — objetos tech flutuantes do hero (portado de three-hero.js).
// initHeroScene(canvas, { accent, accent2 }) -> retorna dispose().
import * as THREE from "three";

type HeroOpts = { accent?: string; accent2?: string };

export function initHeroScene(
	canvas: HTMLCanvasElement | null,
	opts?: HeroOpts
): () => void {
	if (!canvas) return () => {};
	const accent = new THREE.Color(opts && opts.accent ? opts.accent : 0x8b5cf6);
	const accent2 = new THREE.Color(opts && opts.accent2 ? opts.accent2 : 0x6366f1);

	const parent = canvas.parentElement;
	if (!parent) return () => {};
	let w = parent.clientWidth || 480;
	let h = parent.clientHeight || 520;

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
	camera.position.set(0, 0, 7);

	const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
	renderer.setSize(w, h, false);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

	// lights
	scene.add(new THREE.AmbientLight(0x3a3a55, 1.1));
	const p1 = new THREE.PointLight(accent.getHex(), 90, 60);
	p1.position.set(5, 5, 5);
	scene.add(p1);
	const p2 = new THREE.PointLight(accent2.getHex(), 70, 60);
	p2.position.set(-6, -3, 3);
	scene.add(p2);
	const rim = new THREE.DirectionalLight(0xffffff, 0.6);
	rim.position.set(-4, 6, -4);
	scene.add(rim);

	const group = new THREE.Group();
	scene.add(group);

	const solidMat = new THREE.MeshStandardMaterial({
		color: accent,
		metalness: 0.55,
		roughness: 0.25,
		emissive: accent,
		emissiveIntensity: 0.18,
	});
	const wireMat = new THREE.MeshBasicMaterial({
		color: accent.clone().lerp(new THREE.Color(0xffffff), 0.45),
		wireframe: true,
		transparent: true,
		opacity: 0.35,
	});

	// central core: solid icosahedron + wire overlay
	const core = new THREE.Group();
	const coreGeo = new THREE.IcosahedronGeometry(1.55, 0);
	core.add(new THREE.Mesh(coreGeo, solidMat));
	const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.62, 1), wireMat);
	core.add(wire);
	group.add(core);

	// orbiting satellites — varied tech-y primitives
	type Sat = THREE.Mesh & {
		userData: { baseY: number; phase: number; rs: number };
	};
	const sats: Sat[] = [];
	const satMatA = new THREE.MeshStandardMaterial({
		color: accent2,
		metalness: 0.6,
		roughness: 0.3,
		emissive: accent2,
		emissiveIntensity: 0.15,
	});
	const satMatB = new THREE.MeshStandardMaterial({
		color: 0xffffff,
		metalness: 0.2,
		roughness: 0.5,
		transparent: true,
		opacity: 0.9,
	});
	const defs: {
		geo: THREE.BufferGeometry;
		mat: THREE.Material;
		pos: [number, number, number];
	}[] = [
		{ geo: new THREE.TorusGeometry(0.55, 0.18, 16, 48), mat: satMatA, pos: [3.0, 1.4, -0.5] },
		{ geo: new THREE.OctahedronGeometry(0.5, 0), mat: satMatB, pos: [-3.1, 0.9, 0.6] },
		{ geo: new THREE.IcosahedronGeometry(0.42, 0), mat: satMatA, pos: [2.6, -1.7, 0.8] },
		{ geo: new THREE.BoxGeometry(0.6, 0.6, 0.6), mat: satMatB, pos: [-2.5, -1.6, -0.4] },
		{ geo: new THREE.TorusKnotGeometry(0.32, 0.12, 80, 12), mat: satMatA, pos: [0.2, 2.6, -1] },
		{ geo: new THREE.TetrahedronGeometry(0.5, 0), mat: satMatB, pos: [-0.5, -2.7, 0.3] },
	];
	defs.forEach((d, i) => {
		const m = new THREE.Mesh(d.geo, d.mat) as Sat;
		m.position.set(d.pos[0], d.pos[1], d.pos[2]);
		m.userData = { baseY: d.pos[1], phase: i * 1.3, rs: 0.004 + i * 0.0016 };
		group.add(m);
		sats.push(m);
	});

	// particle field
	const pCount = 140;
	const pGeo = new THREE.BufferGeometry();
	const pPos = new Float32Array(pCount * 3);
	for (let i = 0; i < pCount; i++) {
		pPos[i * 3] = (Math.random() - 0.5) * 16;
		pPos[i * 3 + 1] = (Math.random() - 0.5) * 12;
		pPos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
	}
	pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
	const points = new THREE.Points(
		pGeo,
		new THREE.PointsMaterial({
			color: accent.getHex(),
			size: 0.05,
			transparent: true,
			opacity: 0.6,
		})
	);
	scene.add(points);

	// mouse parallax
	let mx = 0,
		my = 0,
		tx = 0,
		ty = 0;
	const onMove = (e: PointerEvent) => {
		const r = parent.getBoundingClientRect();
		tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
		ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
	};
	window.addEventListener("pointermove", onMove);

	const onResize = () => {
		w = parent.clientWidth;
		h = parent.clientHeight;
		camera.aspect = w / h;
		camera.updateProjectionMatrix();
		renderer.setSize(w, h, false);
	};
	window.addEventListener("resize", onResize);

	// paint one frame immediately so a static image shows even if rAF is throttled
	renderer.render(scene, camera);

	const clock = new THREE.Clock();
	let raf = 0;
	const tick = () => {
		const t = clock.getElapsedTime();
		mx += (tx - mx) * 0.05;
		my += (ty - my) * 0.05;
		group.rotation.y = t * 0.12 + mx * 0.5;
		group.rotation.x = my * 0.35;
		core.rotation.y = t * 0.25;
		core.rotation.x = t * 0.12;
		wire.rotation.y = -t * 0.18;
		sats.forEach((m) => {
			m.position.y = m.userData.baseY + Math.sin(t * 0.8 + m.userData.phase) * 0.28;
			m.rotation.x += m.userData.rs;
			m.rotation.y += m.userData.rs * 1.4;
		});
		points.rotation.y = t * 0.03;
		renderer.render(scene, camera);
		raf = requestAnimationFrame(tick);
	};
	tick();

	return function dispose() {
		cancelAnimationFrame(raf);
		window.removeEventListener("pointermove", onMove);
		window.removeEventListener("resize", onResize);
		renderer.dispose();
		coreGeo.dispose();
		defs.forEach((d) => d.geo.dispose());
		pGeo.dispose();
	};
}
