import React from "react";
import "./Home.css";
import hero from "../img/hero.jpg";
import skill1 from "../img/html.png";
import skill2 from "../img/css.png";
import skill3 from "../img/redux.png";
import { Typewriter, userTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I'm <span>Usmonali Azamov</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Professional Coder.", " Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p>
              lorem, ipsum dolor sit amet consectetur adipisicing elit.lorem,
              ipsum dolor sit amet consectetur adipisicing elit.lorem, ipsum
              dolor sit amet consectetur adipisicing elit.lorem, ipsum dolor sit
              amet consectetur adipisicing elit
            </p>
            <div className="hero_btn d_flex">
              <div className="col-1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fab fa-facebook-f">F</i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-instagram">Is</i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-linkedin-in">L</i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
