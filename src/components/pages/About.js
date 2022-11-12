import about1 from "../../images/about1.jpg"
import about2 from "../../images/about2.jpg"
import about3 from "../../images/about3.jpg"
import insta from "../../images/insta.png"
import facebook from "../../images/facebook.png"
import twitter from "../../images/twitter.png"
import spotify from "../../images/spotify.png"
import { Link } from "react-router-dom";


function About() {
	return (
		<div className="page">
			<div className="about">
				<div className="about__title">ABOUT US</div>
				<div className="about__content">
					<div className="about__img">
						<img src={about1}  alt="about"/>
						<div className="about__img2">
							<img src={about2} alt="about"/>
							<img src={about3} alt="about"/>
						</div>
					</div>

					<div className="about__description">
						<div className="description__title">HELLO EVERY ONE !!!</div>
						<div className="description__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, incididunt ut labore et dolore magna aliqua accusantium doloremque laudantium.
							<ul>
								<li>Class aptent taciti sociosqu ad litora torquent per conubia nostra</li>
								<li>Inceptos himenaeos mauris.Integer gravida tincidunt accumsan.</li>
								<li>Vestibulum nulla mauris, condimentum id felis ac, volutpat volutpat mi.</li>
								<li>In vitae tempor velit of the impenetrable foliage.</li>
							</ul>
							Vestibulum commodo nulla eu augue tincidunt rutrum. Suspendisse interdum lacus in ligula finibus luctus. Vivamus mollis libero vel orci finibus, sit amet malesuada lectus aliquam. In auctor viverra eros. Maecenas elit mi, consectetur nec, sollicitudin sed arcu. Curabitur tempor tempor pharetra ridiculus mus porta tincidunt, purus enim laoreet.
						</div>

						<div className="description_icon">
							<Link to="#instagram"><img src={insta} alt="insta"/></Link>
							<Link to="#facebook"><img src={facebook} alt="facebook"/></Link>
							<Link to="#twitter" ><img src={twitter} alt="twitter"/></Link>
							<Link  to="#spotify"><img src={spotify} alt="spotify"/></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;