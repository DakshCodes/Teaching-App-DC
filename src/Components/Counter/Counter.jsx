import React from 'react'

const Counter = () => {
  return (
 <section className="count">
    <div className="box-container">
        <div className="box">
            <i class="fa-solid fa-graduation-cap"></i>
            <div className="content">
                <h3>150+</h3>
                <p>courses</p>
            </div>
        </div>
        <div className="box">
            <i class="fa-solid fa-user-graduate"></i>
            <div className="content">
                <h3>1300</h3>
                <p>students</p>
            </div>
        </div>
        <div className="box">
            <i class="fa-solid fa-chalkboard-user"></i>
            <div className="content">
                <h3>80+</h3>
                <p>teachers</p>
            </div>
        </div>
        <div className="box">
            <i class="fa-solid fa-face-smile"></i>
            <div className="content">
                <h3>100%</h3>
                <p>satisfaction</p>
            </div>
        </div>
    </div>
 </section>
  )
}

export default Counter
