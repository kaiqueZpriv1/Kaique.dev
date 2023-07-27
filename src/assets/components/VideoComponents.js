/** @format */

import explore from "../video/exploreLab.mkv";
import personal from "../video/PersonalTrainer.mkv";
import calculadora from "../video/calculadora.mkv";
import phCakes from "../video/phCakes.mkv";

const portfolioMidia = [
	{
		id: 0,
		midia: personal,
		title: "Personal Trainer",
		url: "https://kaiquezpriv1.github.io/PersonalTrainer/",
	},
	{
		id: 1,
		midia: calculadora,
		title: "Calculadora JS",
		url: "https://kaiquezpriv1.github.io/calculadora/",
	},
	{
		id: 2,
		video: explore,
		title: "Explore Lab",
		url: "https://explore-lab-azure.vercel.app/",
	},
	{
		id: 3,
		midia: phCakes,
		title: "Ph Cakes",
		url: "https://kaiquezpriv1.github.io/phCakes/",
	},
];

function VideoComponents() {
	return (
		<div className='midia-portfolio'>
			{portfolioMidia.map((portfolio) => (
				<div className='box-portfolio' key={portfolio.id}>
					<video
						width='90%'
						height='260'
						controls='controls'
						loop='loop'
						muted='muted'
						autoPlay
						src={portfolio.midia}></video>
					<h3>{portfolio.title}</h3>
					<button className='btn-site'>
						<a href={portfolio.url} target='_blank' rel='noreferrer'>
							Visitar site
						</a>
					</button>
				</div>
			))}
		</div>
	);
}

export default VideoComponents;
