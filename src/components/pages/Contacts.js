function Contacts() {
	return (
		<div className="page">
			<div className="contacts">
				<div className="contacts_title">
						<span>CONTACTS</span>
						<div>Food Stalls with Persons but also specialized <br/> equipment, Skills to manage.</div>
				</div>

				<form action="/contacts"  className="contacts__input">
					<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter your email"/>
					<button className="btn__contacts">Send</button>
				</form>
			</div>
		</div>
	);
}

export default Contacts;