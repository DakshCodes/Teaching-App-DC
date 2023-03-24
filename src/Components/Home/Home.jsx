import React from 'react'
import img from '../Home/logo.svg'
const Home = () => {
  return (
    <section className="home" id='home'>
        <div className="row">
            <div className="content">
                <h3>online <span>education</span></h3>
                <a href="#contact" className="btn">contact us</a>
            </div>
            <div className="image">
                <img src={img} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Home
