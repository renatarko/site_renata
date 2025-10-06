import * as S from "./style";

const habilities = [
	"Design de Interface do Usuário (UI/UX)",
	"Execução de operações CRUD",
	"Integração com APIs",
	"Gerenciamento de Bancos de Dados",
];

export default function MyJobs() {
	return (
		<S.Wrapper>
			<S.Container>
				<S.SectionTitle>Serviços</S.SectionTitle>

				<S.TitleContainer>
					<h2>Habilidades e Competências</h2>
				</S.TitleContainer>

				<S.Description>
					Minha experiência prática se reflete em projetos que exigiram uma visão
					completa de desenvolvimento e arquitetura:
				</S.Description>
				<S.Description>
					<b>Plataforma de Gestão de Eventos:</b> Desenvolvi uma plataforma completa
					para criação, gerenciamento e venda de ingressos para eventos. Implementei
					a integração com gateways de pagamento, garantindo transações seguras e
					eficientes, aceitando pagamentos via Pix e Cartão de Crédito.
				</S.Description>
				<S.Description>
					<b>Criação de Landing Pages End-to-End:</b> Tenho proficiência em todo o
					ciclo de vida da criação de landing pages de alta conversão, desde a
					concepção do design no Figma até a implementação final responsiva e
					otimizada para diferentes dispositivos.
				</S.Description>

				<ul>
					<S.Description>
						Em todos os projetos, não apenas aprimorei minhas competências técnicas,
						como:
					</S.Description>
					{habilities.map((item, index) => (
						<S.ListItem key={index + 1}>- {item}</S.ListItem>
					))}
				</ul>
			</S.Container>
		</S.Wrapper>
	);
}
