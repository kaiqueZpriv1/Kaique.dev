/** @format */

import "./App.css";
import HeaderComponents from "./assets/components/HeaderComponents";
import HabilidadesComponents from "./assets/components/HabilidadesComponents";
import VideoComponents from "./assets/components/VideoComponents";
import ContatosComponents from "./assets/components/ContatosComponents";
import { AiFillCopyrightCircle } from "react-icons/ai";
import ArrowDownComponents from "./assets/components/ArrowDownComponents";
import imagePessoal from "./assets/image/foto-pessoal.png";
function App() {
	const links = {
		linkedin: "www.linkedin.com/in/kaique-ferreira-k14",
		github: "https://github.com/kaiqueZpriv1",
	};
	return (
		<div className='App'>
			<HeaderComponents />
			<main id='home'>
				<div className='container-main'>
					<h3>Olá, eu sou</h3>
					<h1>Kaique Ferreira</h1>
					<p>Desenvolvedor Front-End</p>
				</div>
				<div className='container-link'>
					<button>
						<a
							href={links.github}
							className='link-main'
							target='_blank'
							rel='noreferrer'>
							GitHub
						</a>
					</button>
					<button>
						<a
							href={links.linkedin}
							className='link-main'
							target='_blank'
							rel='noreferrer'>
							Linkedin
						</a>
					</button>
				</div>
				<ArrowDownComponents />
			</main>
			<div className='sobreMim' id='sobreMim'>
				<div className='foto'>
					<img src={imagePessoal} alt='minha foto' />
				</div>
				<div className='text-sobre'>
					<h3>Kaique Ferreira</h3>
					<p>
						Tenho 17 anos e sou desenvolvedor Front-End na cidade de São Paulo.
						Estou no meu ultimo ano do ensino médio, e busco me formar em
						Análise e desenvolvimento de sistemas. Meu primeiro contato com o
						desenvolvimento web foi em 2022, onde comecei a estudar e realizar
						meus primeiros projetos em Html, Css e JavaScript. Atualmente estudo
						e desenvolvo projetos freelancer, buscando evoluir e ampliar meus
						conhecimentos em Front-End.
					</p>
				</div>
			</div>
			<HabilidadesComponents />
			<VideoComponents />
			<ContatosComponents />
			<footer>
				<h3 className='text-footer'>
					2023
					<AiFillCopyrightCircle size={25} />
					<a href={links.github} target='_blank' rel='noreferrer'>
						@KaiqueZpriv1
					</a>
					All Right Reservad
				</h3>
			</footer>
		</div>
	);
}

export default App;
