import React from 'react'
import logo from '../Home/logo.svg'
const About = () => {
  return (
    <section className="about" id='about'>
        <div className="row">
            <div className="image">
                <img src={logo} alt="" />
            </div>
            <div className="content">
                <h3>why choose us?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolores?</p>
                <a href="#contact" className="btn">contact us</a>
            </div>
        </div>
    </section>
  )
}

export default About;
