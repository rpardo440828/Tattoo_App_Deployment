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
        content: "If no contact is made an hour prior, then the appointment will be cancelled and rescheduling will be necessary. A new deposit will be required for a new appointment."
    },

    {
        title: "Is there a cancellation fee?",
        content: "No cancellation fee, however deposits are nonrefundable unless changes to the appointment were made by me."
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