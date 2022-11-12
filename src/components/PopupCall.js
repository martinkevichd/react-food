import { Link } from "react-router-dom";

function PopupCall({active, setActive}) {
    return (
		<div className={active ? "popupCall active" : "popupCall"}>
				<div className="popupCall__content">
					<h2>To order a menu or book an event, call <a href="tel:+375292332211">+375(29)233-22-11</a></h2>
					<button className="btn-close"  onClick={() => setActive(false)}></button>
				</div>
		</div>
	);
}

export default PopupCall;