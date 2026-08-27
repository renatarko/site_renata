import Link from "next/link";

const medias: { name: string; url: string }[] = [
	{ name: "WhatsApp", url: "https://wa.me/5567991687767" },
	{ name: "Instagram", url: "https://www.instagram.com/renata_rko/" },
	{ name: "Linkedin", url: "https://www.linkedin.com/in/renata-karolina-de-oliveira-rko/" },
	{ name: "GitHub", url: "https://github.com/renatarko" },
	{ name: "Twitter", url: "https://twitter.com/renatarko_" },
];

const text = "Fale com a Renata Karolina | Desenvolvedora | ";
const url = "https://renatakarolina.vercel.app/contato";

// Mesmo path usado em landing/WhatsAppFab.tsx.
function WhatsAppIcon() {
	return (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="#06c44f" aria-hidden="true">
			<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.24 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
		</svg>
	);
}

// Equivalente ao FaShareAlt do react-icons, que saiu junto com a dependência.
function ShareIcon() {
	return (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="gray" aria-hidden="true">
			<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92Z" />
		</svg>
	);
}

export default function SociaisMedias() {
	return (
		<div className="lk-wrap">
			<div className="lk-inner">
				<Link href="/" className="lk-back">
					Voltar
				</Link>
				<div className="lk-content">
					<div className="lk-info">
						<div className="lk-avatar">
							<img src="/assets/rk.png" alt="Logo Renata Karolina" />
						</div>
						<h2>@renata_rko</h2>

						<div className="lk-title">
							<h1>Renata Karolina</h1>
							<h3>Desenvolvedora Front End</h3>
						</div>
					</div>

					<section className="lk-links">
						<ul>
							{medias.map((media) => (
								<li key={media.name}>
									<a target="_blank" href={media.url}>
										<span>{media.name}</span>
									</a>
								</li>
							))}
						</ul>
					</section>

					<a
						className="lk-share"
						href={`https://api.whatsapp.com/send?text=${encodeURIComponent(text + url)}`}
						target="_blank"
					>
						<div>
							<WhatsAppIcon />
							<p>Compartilhar por</p>
						</div>
						<ShareIcon />
					</a>
				</div>
			</div>
		</div>
	);
}
