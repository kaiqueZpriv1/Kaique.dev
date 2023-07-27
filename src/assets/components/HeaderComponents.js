/** @format */

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import RedesSociais from "./RedesSociais";
import "../css/header.css";
function HeaderComponents() {
	const [menuAberto, setMenuAberto] = useState(false);

	function handleMenuToggle() {
		setMenuAberto((prevState) => !prevState);
	}
	function handleLinkClick() {
		setMenuAberto(false);
	}

	return (
		<header>
			<div className='container-header'>
				<div
					className='burger'
					style={{
						background: menuAberto ? "rgb(34, 34, 34)" : "transparent",
					}}>
					<button onClick={handleMenuToggle}>
						{menuAberto ? (
							<AiOutlineClose size={40} color='#fff' />
						) : (
							<AiOutlineMenu size={40} color='#fff' />
						)}
					</button>
					<div
						className='menu-mobile'
						style={{ width: menuAberto ? "65%" : "0" }}>
						<div className='container_atalhos'>
							<a href='#home' onClick={handleLinkClick}>
								Início
							</a>
							<a href='#sobreMim' onClick={handleLinkClick}>
								Sobre mim
							</a>
							<a href='#habilidades' onClick={handleLinkClick}>
								Habilidades
							</a>
							<a href='#portfolio' onClick={handleLinkClick}>
								Portfólio
							</a>
							<a href='#contatos' onClick={handleLinkClick}>
								Contato
							</a>
						</div>
						<RedesSociais />
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeaderComponents;
