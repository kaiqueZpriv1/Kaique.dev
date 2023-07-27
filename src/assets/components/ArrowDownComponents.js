/** @format */
import { AiOutlineArrowDown } from "react-icons/ai";
import "../css/arrowDown.css";
function ArrowDownComponents() {
	function handleDown() {
		window.scrollTo({
			top: 680,
			behavior: "smooth",
		});
	}
	return (
		<>
			<button className='down' onClick={handleDown}>
				<AiOutlineArrowDown size={35} />
			</button>
		</>
	);
}

export default ArrowDownComponents;
