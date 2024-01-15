import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import Card from "../../../../components/Card/Card";
import Small_1 from "../../../../assets/Small_2.jpg";
import Small_2 from "../../../../assets/Small_3.jpg";
import "./SmPage.css";

const SmPage = () => {
    return (
        <div className="Home">
            <div>
                <div className="wrapperS">
                    <Card img={Small_1} />
                    <Card img={Small_2} />
                </div>
            </div>
      </div>
    );
};

export default SmPage;