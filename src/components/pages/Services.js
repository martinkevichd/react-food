import wedding from "../../images/img1.jpg";
import banquets from "../../images/img2.jpg";
import catering from "../../images/img3.jpg";
import order from "../../images/img4.jpg";
import enogDinner from "../../images/img5.jpg";
import event from "../../images/img6.jpg";

function Services() {
	const libraryServices = [
		{img: wedding, name:'Wedding', description:'Do you want to have a magical and unforgettable wedding? The restaurant team will help you realize your ideas of any complexity and scale in holding a wedding celebration.'},
		{img: banquets, name: 'Banquets', description: 'We are glad to organize a celebration of any complexity for you: corporate party, birthday, wedding party,children`s party, etc'},
		{img: catering, name: 'Catering', description: 'Turnkey catering in Minsk and the Minsk region. Any events! Varied menu, fast delivery. Contact us! Special events: Wedding, Anniversary. Holidays for the office.'},
		{img: order, name: 'Cakes to order', description: 'A cake is not just a dessert, it is the culmination of a celebration that will help any holiday become unforgettable! The experience of our masters allows us to create magnificent confectionery masterpieces for any celebration: from a birthday or wedding to a corporate event.'},
		{img: enogDinner, name: 'Enogastronomic dinner', description: 'Organization of an enogastronomic dinner for your company! An individual approach, a consistently high level of organization and conduct of wine dinners, professionalism in the work of the chef and sommelier are the main principles of the restaurant team.'},
		{img: event, name: 'Conducting business events of any format', description: 'Need a venue for a business meeting, presentation or seminar? In one place you can combine work, leisure and fun!'}
	];
	return (
		<div className="page">
				<div className="services">
					<div className="services__title">SERVICES</div>
					<div className="services__list">
						{libraryServices.map((item, index) => {
							return (
								<div key ={index} className="services__item">
									<img src={item.img} alt={item.name}/>
									<h3>{item.name}</h3>
									<p>{item.description}</p>
								</div>
							);
						})}
					</div>
				</div>
		</div>
	);
}

export default Services;