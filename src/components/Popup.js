import { useState } from "react"

function Popup({active, setActive}) {
	const [reserve, setReserve] = useState([]);

	const close = function(){
		setActive(false);
	}

	const decr = function() {
		const number =document.querySelector('.number-input');
		if(number.value != 1 || number.value < 0)number.value--;
	}

	const incr = function() {
		const number =document.querySelector('.number-input');
		if(number.value != 15) number.value++;
	}

	const tooltipShow = function() {
		const tooltip = document.querySelector('.tooltip');
		tooltip.style.visibility = "visible";
	}

	const tooltipHidden = function() {
		const tooltip = document.querySelector('.tooltip');
		tooltip.style.visibility = "hidden";
	}

	const tooltipInvalid = function() {
		const tooltip = document.querySelector('.tooltip-correct');
		tooltip.style.visibility = "visible";
	}

	const tooltipInvalidHidden = function() {
		const tooltip = document.querySelector('.tooltip-correct');
		tooltip.style.visibility = "hidden";
	}

	const tooltipBooking = function() {
		const tooltip = document.querySelector('.tooltip-booking');
		tooltip.style.visibility = "visible";
	}

	const tooltipBookingHidden = function() {
		const tooltip = document.querySelector('.tooltip-booking');
		tooltip.style.visibility = "hidden";
	}

	const booking = function() {
		let reserveTmp = reserve;
		const elems = document.querySelectorAll('input');
		const textarea = document.querySelector('textarea');
		if(elems[0].value !="" && elems[1].value!="" && elems[2].value!="" && elems[3].value!="" && elems[4].value!=""){
			if(!isNaN(elems[1].value)){
			reserveTmp.push({
				'Name':elems[0].value,
				'Phone': elems[1].value,
				'Number': elems[2].value,
				'Date': elems[3].value,
				'Time': elems[4].value,
				'Comments': textarea.value
			});
			setReserve([...reserveTmp]);
			reserveTmp = JSON.stringify(reserveTmp);
			localStorage.setItem('Booking', reserveTmp);
			tooltipHidden();
			tooltipInvalidHidden();
			tooltipBooking();
			setTimeout(tooltipBookingHidden,4000);
			elems.forEach(item=>item.value ='');
			close();
			} else {
				tooltipHidden();
				tooltipInvalid();
			}
		}else {
			tooltipShow();
			tooltipInvalidHidden();
		}
	}	

	return (
		<div className={active ? "popup active" : "popup"}>
				<div className="popup__content">
					<h2>Booking</h2>
					<button className="btn-close"  onClick={() => setActive(false)}></button>
					<div className="tooltip">all fields must be filled in</div>
					<div className="tooltip-correct">Enter correct value</div>
					<div className="enter">
						<div className="name">
							<div className="title">Enter your name</div>
							<input className="name-input" required placeholder="Name" type="text"/>
						</div>
						<div className="phone">
							<div className="title"> Phone number</div>
							<input className="phone-input" required placeholder="Phone" type="tel"/>
						</div>
					</div>
					<div className="enter">
						<div className="number">
							<div className="title">Number of person</div>
							<span className="decr" onClick={decr}>-</span><input className="number-input" required min="1" defaultValue="1" type="number"/><span className="incr" onClick={incr}>+</span>
						</div>
						<div className="date">
							<div className="title">Date of visit</div>
							<input className="date-input" required type="date"/>
						</div>
						<div className="time">
							<div className="title">Time</div>
							<input required className="time-input" type="time"/>
						</div>
					</div>
					<div className="title">Comment</div>
					<textarea placeholder="Your message text"></textarea>
				</div>
				<input type="submit" value='Booking' className="btn booking"  onClick={booking}/>

			</div>
	);
}

export default Popup;