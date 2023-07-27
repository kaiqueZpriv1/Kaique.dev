/** @format */
import "../css/redesSociais.css";
import {
	AiOutlineWhatsApp,
	AiOutlineInstagram,
	AiOutlineMail,
} from "react-icons/ai";

function RedesSociais() {
	const linkSociais = {
		whatsApp:
			"https://api.whatsapp.com/send/?phone=11933323486&text&type=phone_number&app_absent=0",
		instagram: "https://instagram.com/kaique_developer?igshid=YmMyMTA2M2Y=",
		email: "https://is.gd/kaique_email",
	};
	return (
		<div className='rede-social'>
			<button>
				<a href={linkSociais.instagram} target='_blank' rel='noreferrer'>
					<AiOutlineWhatsApp size={35} color='#075E54' />
				</a>
			</button>
			<button>
				<a href={linkSociais.instagram} target='_blank' rel='noreferrer'>
					<AiOutlineInstagram size={35} color='#C13584' />
				</a>
			</button>
			<button>
				<a href={linkSociais.email} target='_blank' rel='noreferrer'>
					<AiOutlineMail size={35} color='#999' />
				</a>
			</button>
		</div>
	);
}
export default RedesSociais;
