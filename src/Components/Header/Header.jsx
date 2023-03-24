import React from 'react'
const Header = () => {

  function handle(){
    let menubtn=document.querySelector('#menu-btn');
    let navbar=document.querySelector('.header .flex .navbar');
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
  }
  return (
    <header className='header'>
       <section className="flex">
        <a href="#home" className="logo">educa.</a>
        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#courses">courses</a>
            <a href="#teachers">teachers</a>
            <a href="#reviews">reviews</a>
            <a href="#contact">contact</a>
        </nav>
        <div id='menu-btn'   onClick={handle}  class="fa-solid fa-bars"></div>
       </section>
    </header>
  )
}

export default Header
