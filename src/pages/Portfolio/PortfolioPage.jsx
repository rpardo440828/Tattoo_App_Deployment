import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./PortfolioPage.css";
import Small from "../../assets/Small_1.jpg"
import Medium from "../../assets/Medium_2.jpg"
import Large from "../../assets/Large_1.jpg"
import XLarge from "../../assets/Xtra_Large_1.jpg"

const PortfolioPage = () => {
    return (
      <div className="Home">
        <div className="wrapperP">
          <Card img={Small}
            title="Small" description="Deposit: $50" link="/portfolio/small" />

          <Card img={Medium}
            title="Medium" description="Deposit: $50" link="/portfolio/medium" />

          <Card img={Large} 
            title="Large" description="Deposit: $75" link="/portfolio/large" />

          <Card img={XLarge}
            title="Xtra Large" description="Deposit: $100" link="/portfolio/xtra_large" />

        </div>
      </div>
    );
  };

  function Card(props) {
    return (
      <div className="card_p">
        <div className="card__body">
          <img src={props.img} className="card__image" />    {/*Ex. Picture of tattoo*/}
          <h2 className="card__title">{props.title}</h2> {/*Ex. Size of tattoo*/}
          <p className="card__description">{props.description}</p>   {/*Ex. Deposit amount of tattoo*/}
        </div>
        <div className="bottom">
          <Link to={props.link}><button className="card__btn">More</button> </Link>
        </div>
      </div>
    );
  }
  
  export default PortfolioPage;