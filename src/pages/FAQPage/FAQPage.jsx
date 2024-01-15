import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./FAQPage.css";

const data = {
  title: "Frequently Asked Questions",

  rows: [
    {
        title: "How can I send the deposit?",
        content: "Deposits can be sent through cashapp or zelle. The remainder will be paid by cash only on the day of the appointment."
    },

    {
        title: "How much are touch ups?",
        content: "It will depend on the size of the tattoo. Price can be discussed at appointment or over Instagram."
    },

    {
        title: "Is there a late fee?",
        content: "You will have a 10 min grace period, after that there will be a $25 late fee charge. After 20 min your appointment will be canceled and you will not get your deposit back. A new deposit will be required for a new appointment."
    },

    {
        title: "Is there a cancellation fee?",
        content: "If you cancel within 48 hours there will be no fee and you will receive your deposit back. Same day cancellations will not be able to get deposit back."
    },
  ],
};

const styles = {
  titleTextColor: "white",
  titleTextSize: "45px",
  rowTitleColor: "white",
  rowTitleTextSize: "45px",
  rowContentColor: "white",
  rowContentTextSize: "30px",
  bgColor: "transparent",
  arrowColor: "white",
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

const FAQPage = () => {
  const [questions, setQuestions] = useState(data);

    return (
      <div className="Home">
        <div>
          <div className="FAQ">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQPage;