// Atmospheric fixed background layer (glow, grid, noise).
export default function Background() {
	return (
		<div className="bg-fx" aria-hidden="true">
			<div className="grid" />
			<div className="glow1" />
			<div className="glow2" />
			<div className="noise" />
		</div>
	);
}
