import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import Xtra_Large_1 from "../../../../assets/Xtra_Large_2.jpg";
import Xtra_Large_2 from "../../../../assets/Xtra_Large_3.jpg";
import Xtra_Large_3 from "../../../../assets/Xtra_Large_4.jpg";
import Xtra_Large_4 from "../../../../assets/Xtra_Large_5.jpg";
import Xtra_Large_5 from "../../../../assets/Xtra_Large_6.jpg";
import Xtra_Large_6 from "../../../../assets/Xtra_Large_7.jpg";
import Card from "../../../../components/Card/Card";
import "./XLPage.css";

const XLPage = () => {
    return (
        <div>
            <div className="Home">
                <div className="wrapperXL">
                    <Card img={Xtra_Large_1} />
                    <Card img={Xtra_Large_2} />
                    <Card img={Xtra_Large_3} />
                    <Card img={Xtra_Large_4} />
                    <Card img={Xtra_Large_5} />
                    <Card img={Xtra_Large_6} />
                </div>
            </div>
      </div>
    );
};

export default XLPage;