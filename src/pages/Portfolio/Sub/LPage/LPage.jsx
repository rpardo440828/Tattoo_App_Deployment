import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import Card from "../../../../components/Card/Card";
import Large_1 from "../../../../assets/Large_2.jpg";
import Large_2 from "../../../../assets/Large_3.jpg";
import Large_3 from "../../../../assets/Large_4.jpg";
import Large_4 from "../../../../assets/Large_5.jpg";
import Large_5 from "../../../../assets/Large_6.jpg";
import Large_6 from "../../../../assets/Large_7.jpg";
import Large_7 from "../../../../assets/Large_8.jpg";
import "./LPage.css";

const LPage = () => {
    return (
        <div className="Home">
            <div className="LPage">
                <div className="wrapperL">
                    <Card img={Large_1} />
                    <Card img={Large_2} />
                    <Card img={Large_3} />
                    <Card img={Large_4} />
                    <Card img={Large_5} />
                    <Card img={Large_6} />
                    <Card img={Large_7} />
                </div>
            </div>
      </div>
    );
};

export default LPage;