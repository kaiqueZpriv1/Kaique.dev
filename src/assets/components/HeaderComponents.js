/** @format */

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import RedesSociais from "./RedesSociais";

function HeaderComponents() {
	// Estado para controlar se o menu mobile está aberto ou fechado
	const [menuAberto, setMenuAberto] = useState(false);

	function handleMenuToggle() {
		// Inverte o estado do menu quando o botão é clicado
		setMenuAberto((prevState) => !prevState);
	}
	return (
		<header>
			<div className='container-header'>
				<div className='burger'>
					<button onClick={handleMenuToggle}>
						{/* condição se o menu estiver aberto ou fechado */}
						{menuAberto ? (
							<AiOutlineClose size={40} />
						) : (
							<AiOutlineMenu size={40} />
						)}
					</button>
					{/* Define a largura do menu com base no estado menuAberto */}
					<div
						className='menu-mobile'
						style={{ width: menuAberto ? "100%" : "0" }}>
						<div className='container-menu'>
							<a href='#menu'>Início</a>
							<a href='#menu'>Sobre mim</a>
							<a href='#menu'>Habilidades</a>
							<a href='#menu'>Portfólio</a>
							<a href='#menu'>Contato</a>
						</div>
						<RedesSociais />
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeaderComponents;
