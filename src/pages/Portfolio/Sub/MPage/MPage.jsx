import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import Card from "../../../../components/Card/Card";
import Medium_1 from "../../../../assets/Medium_1.jpg";
import Medium_2 from "../../../../assets/Medium_3.jpg";
import Medium_3 from "../../../../assets/Medium_4.jpg";
import "./MPage.css";

const MPage = () => {
    return (
        <div className="Home">
            <div>
                <div className="wrapperM">
                    <Card img={Medium_1} />
                    <Card img={Medium_2} />
                    <Card img={Medium_3} />
                </div>
            </div>
      </div>
    );
};

export default MPage;