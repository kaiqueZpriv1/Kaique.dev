/** @format */

import RedesSociais from "./RedesSociais";
import "../css/contatos.css";
import DetailsComponents from "./DetailsComponents";
function ContatosComponents() {
	return (
		<div className='contatos_footer' id='contatos'>
			<h3>Contatos</h3>
			<DetailsComponents />
			<div className='components-redes'>
				<RedesSociais />
			</div>
		</div>
	);
}
export default ContatosComponents;
