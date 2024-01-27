import React from "react";
import "./HeroSection.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ButtonLink({ to, children }) {
    return <Link to={to}><Button style={{color: 'white'}}>{children}</Button></Link>;
}

const HeroSection = () => {
  return (
    <div className="Hero">
        <h1 className="Title">
            What Does BE EZ Mean?<br />
        </h1>
        <p className="AboutMe">
            Be Patient<br />
            Be Understanding<br />
            Be Easy.<br />
            I started tattooing as an escape from my mind and as a coping skill
            from my depression, anger, and anxiety. It started as just something
            I would only do on myself, I never thought of it being a career.
            My friends one day came over and asked for tattoos and next thing
            I know BE EZ was born.<br />
            <br />
            Tattooing became an escape for not only me but for my clients as well.
            Hearing their stories and knowing my sessions bring a peace and
            joy from our dark lives means everything to me. This is more than
            tattooing, it's creativity, it's putting your mind out of the endless
            black hole and bringing light to our lives.<br />
        </p>
        <div className="b">
            <ButtonLink to="/FAQ">FAQ</ButtonLink>
        </div>
    </div>
  );
};

export default HeroSection;