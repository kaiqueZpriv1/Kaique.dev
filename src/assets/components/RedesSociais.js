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
			"https://api.whatsapp.com/send/?phone=111933323486&text&type=phone_number&app_absent=0",
		instagram: "https://instagram.com/kaique_developer?igshid=YmMyMTA2M2Y=",

		email:
			"mailto:kakamelo141205@gmail.com?Subject=Or%E7amento&Body=Ola%2C%20gostaria%20de%20fazer%20um%20or%E7amento%20%21",
	};
	return (
		<div className='rede-social'>
			<button>
				<a href={linkSociais.whatsApp} target='_blank' rel='noreferrer'>
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
