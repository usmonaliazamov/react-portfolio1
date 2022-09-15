import React, {useState} from "react";
import './Header.css'
import logo from '../img/logo.png'

const Header = () => {
    // when scroll header at top
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    })

    // toggle menu
    const [Mobile, setMobile] = useState(false)
    return (
      <>
        <header className="header">
          <div className="container d_flex">
            <div className="logo">
              <img className="logo-img" src={logo} alt="" />
              <h4>Usmonali</h4>
            </div>
            <div className="navlink">
              {/* <ul className="link f_flex uppercase"> */}
              <ul
                className={
                  Mobile ? "nav-links-mobile" : "link f_flex uppercase"
                }
                onClick={() => setMobile(false)}
              >
                <li>
                  <a href="#home">home</a>
                </li>
                <li>
                  <a href="#features">features</a>
                </li>
                <li>
                  <a href="#portfolio">portfolio</a>
                </li>
                <li>
                  <a href="#resume">resume</a>
                </li>
                <li>
                  <a href="#clients">clients</a>
                </li>
                <li>
                  <a href="#blog">blog</a>
                </li>
                <li>
                  <a href="#contact">contact</a>
                </li>
                <li>
                  <button className="home-btn">Buy Now</button>
                </li>
              </ul>
              <button className="toggle" onClick={() => setMobile(!Mobile)}>
                {Mobile ? (
                  <i className="fas fa-times close home-btn">x</i>
                ) : (
                  <i className="fas fa-bars open">-</i>
                )}
              </button>
            </div>
          </div>
        </header>
        {/* header end */}
        {/* section start */}
        <section className="demo">

        </section>
        {/* section start */}
      </>
    );
}

export default Header