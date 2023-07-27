/** @format */

import { AiOutlineHtml5 } from "react-icons/ai";
import DetailsComponents from "./DetailsComponents";
import { DiCss3Full, DiJavascript1, DiReact } from "react-icons/di";
import "../css/habilidades.css";

function HabilidadesComponents() {
	return (
		<div className='container-habilidade' id='habilidades'>
			<h3>Habilidades</h3>
			<DetailsComponents />
			<div className='linguagem-item'>
				<AiOutlineHtml5 size={65} color='#f06529' />
				<h3>HTML</h3>
				<p>Linguagem de Marcação de Hipertexto</p>
				<button className='btn-documentacao'>
					<a
						href='https://developer.mozilla.org/pt-BR/docs/Web/Html'
						target='_blank'
						rel='noopener noreferrer'>
						Saiba mais
					</a>
				</button>
			</div>
			<div className='linguagem-item'>
				<DiCss3Full size={65} color='#264de4' />
				<h3>CSS</h3>
				<p>
					CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma
					linguagem de estilo.
				</p>
				<button className='btn-documentacao'>
					<a
						href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
						target='_blank'
						rel='noopener noreferrer'>
						Saiba mais
					</a>
				</button>
			</div>
			<div className='linguagem-item'>
				<DiJavascript1 size={65} color='#f0db4f' />
				<h3>JAVA SCRIPT</h3>
				<p>
					O JavaScript é uma linguagem multi-paradigma e dinâmica, suportando
					estilos de orientação a objetos, imperativos e declarativos.
				</p>
				<button className='btn-documentacao'>
					<a
						href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
						target='_blank'
						rel='noopener noreferrer'>
						Saiba mais
					</a>
				</button>
			</div>
			<div className='linguagem-item'>
				<DiReact size={65} color='#61dbfb' />
				<h3>REACT JS</h3>
				<p>
					O React é uma biblioteca front-end JavaScript de código aberto com
					foco em criar interfaces de usuário em páginas web.
				</p>
				<button className='btn-documentacao'>
					<a
						href='https://react.dev/'
						target='_blank'
						rel='noopener noreferrer'>
						Saiba mais
					</a>
				</button>
			</div>
		</div>
	);
}

export default HabilidadesComponents;
