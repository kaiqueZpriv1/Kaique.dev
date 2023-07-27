/** @format */

import "./App.css";
import HeaderComponents from "./assets/components/HeaderComponents";
import HabilidadesComponents from "./assets/components/HabilidadesComponents";
import VideoComponents from "./assets/components/VideoComponents";
function App() {
	const links = {
		linkedin: "www.linkedin.com/in/kaique-ferreira-k14",
		github: "https://github.com/kaiqueZpriv1",
	};
	return (
		<div className='App'>
			<HeaderComponents />
			<main>
				<div className='container-main'>
					<h3>Olá, eu sou</h3>
					<h1>Kaique Ferreira</h1>
					<p>Desenvolvedor Front-End</p>
				</div>
				<div className='container-link'>
					<button>
						<a href={links.github} target='_blank' rel='noreferrer'>
							Link para o GitHub
						</a>
					</button>
					<button>
						<a href={links.linkedin} target='_blank' rel='noreferrer'>
							Linkedin
						</a>
					</button>
				</div>
			</main>
			<div className='sobreMim'>
				<div className='foto'>
					<img src='https://via.placeholder.com/150' alt='minha foto' />
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
		</div>
	);
}

export default App;
