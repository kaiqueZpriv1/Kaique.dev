/** @format */

import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full, DiJavascript1, DiReact } from "react-icons/di";

const linguagemInfo = [
	{
		id: 0,
		icon: AiOutlineHtml5,
		title: "HTML",
		descricao: "Linguagem de Marcação de Hipertexto",
		url: "https://developer.mozilla.org/pt-BR/docs/Web/Html",
	},
	{
		id: 0,
		icon: DiCss3Full,
		title: "CSS",
		descricao:
			"CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo.",
		url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
	},
	{
		id: 0,
		icon: DiJavascript1,
		title: "JAVA SCRIPT",
		descricao:
			"O JavaScript é uma linguagem multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos.",
		url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
	},
	{
		id: 0,
		icon: DiReact,
		title: "REACT JS",
		descricao:
			"O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
		url: "https://react.dev/",
	},
];

function HabilidadesComponents() {
	return (
		<div className='container-habilidade'>
			{linguagemInfo.map((linguagem) => (
				<div key={linguagem.id} className='linguagem-item'>
					<linguagem.icon size={35} />
					<h3>{linguagem.title}</h3>
					<p>{linguagem.descricao}</p>
					<a href={linguagem.url} target='_blank' rel='noopener noreferrer'>
						Saiba mais
					</a>
				</div>
			))}
		</div>
	);
}

export default HabilidadesComponents;
