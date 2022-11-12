import { Link } from "react-router-dom"
import about from "../../images/about.png"
import menu from "../../images/menu.jpg"
import app from "../../images/app.png"
import slider1 from "../../images/slider.png"
import slider2 from "../../images/slider2.png"
import Popup from "../Popup"
import { useState } from "react"
function Home() {
	const prev = function() {
		const listElem = document.querySelector('#slider1');

		let x = listElem.style.transform;

        if(!x) {x=0;}
        else{
            x= x.replace('translateX(','');
            x= x.replace('%)','');
            x = Math.abs(x);    
        }
 
        x-=100;
       
        listElem.style.transform = `translateX(-${x}%)`;
	}

	const next = function() {
		const listElem = document.querySelector('#slider1');

		let x = listElem.style.transform;

        if(!x) {x=0;}
        else{
            x= x.replace('translateX(','');
            x= x.replace('%)','');
            x = Math.abs(x);    
        }
 
        x+=100;
       
		const stopPoint = (listElem.children.length -1)*100;
		
        if(x<=stopPoint)  listElem.style.transform = `translateX(-${x}%)`;
		if(x>stopPoint)  listElem.style.transform = `translateX(-${0}%)`;
	}

	const [popupAcrive, setPopupActive] = useState(false);

	return (
		<div className="page">
			<div className="home__slider"  >
				<div className="slider__list" id="slider1"  >
					<div className="slider__item" >
						<img src={slider1} onClick={()=>setPopupActive(true)} alt="slider"/>
					</div>
					<div className="slider__item" >
						<Link to="/menu"><img src={slider2}  alt="slider"/></Link> 
					</div>
				</div>
				<button id="slider1_btn_left" className="slider__btn left" onClick={prev}><span >&lsaquo;</span> </button>
          		<button id="slider1_btn_right" className="slider__btn right" onClick={next}><span >&rsaquo;</span> </button>
			</div>
			<div className="tooltip-booking">Booking is successfully</div>

			<Popup active={popupAcrive} setActive={setPopupActive}/>
			<div className="home__features">
				<div className="home__features_title">
					<span>FEATURES</span>
					<div>Food With A New Passion</div>
				</div>

				<div className="home__feature__container">
					<div className="home__features__item">
						<div className="item__icon-home"></div>
						<div className="item__title">Quality Food</div>
						<div className="item__description">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</div>
					</div>
					<div className="home__features__item">
						<div className="item__icon-delivery"></div>						
						<div className="item__title">Food Delivery</div>
						<div className="item__description">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</div>
					</div>
					<div className="home__features__item">
						<div className="item__icon-smile"></div>
						<div className="item__title">Super Taste</div>
						<div className="item__description">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</div>
					</div>
				</div>
			</div>

				<div className="home__about_us">
					<div className="home__about_us__img">
						<img src={about} alt="about"/>	 
					</div>
					<div className="home__about_us__description">
						<div className="description__about_us">About us</div>
						<div className="description__title">Food Stalls with Persons but  to  Product marketing plane catlogues etc to. </div>
						<div className="description__text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.</div>
						<button className="btn"><Link to="/about/"> Read More </Link></button>
					</div>
				</div>

				<div className="home__menu">
					<div className="home__menu__description">
						<div className="description__about_us">Menu</div>	
						<div className="description__title">Food Full of treaty Love</div>
						<div className="description__text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </div>
						<button className="btn"><Link to="/menu/"> Read More </Link></button>
					</div>
					<div className="home__menu__img">
						<img src={menu} alt="menu"/>	
					</div>	
				</div>
				
				<div className="home__download">
					<div className="home__download__description">
						<div className="download__take_away">TAKE AWAY</div>
						<div className="download__title">Food Stalls with Persons but  to  Product marketing plane. </div>
						<div className="download__text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</div>
						<div className="download__btn">
							<button className="btn-apple">App Store</button>
							<button className="btn-google">Google Play</button>
						</div>
					</div>
					<div className="home__download__img">
					<img src={app} alt="app"/>
					</div>
				</div>			
		</div>
	);
}

export default Home;

