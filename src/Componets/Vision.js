import React from 'react'
import "./Vision.css"
const Vision = () => {
  return (
    <>
    <div className="conatainer_about" id='Vision'>
        <div className="first_container">
            <h3 className='details'>Our Mission is to Serve Authentic and Traditional Marathi Nonveg Delicacies with Unmatched Food Quality, Consistency in Food Taste And Best in Class Customer Service, in meaning.. अतिथी देवो भव:</h3>
            <ul className='speciality'>
                <li> <i className='yes_symbol' class="fa fa-check" i/>  No Aji-No-Moto in Food</li>
                <li> <i className='yes_symbol' class="fa fa-check" i/> No Food Colors</li>
                <li><i  className='yes_symbol' class="fa fa-check" i/> No Food Essence</li>
                <li> <i className='yes_symbol' class="fa fa-check" i/> No Food Preservatives</li>
            </ul>
        </div>
        <div className="second_container">
            <img src="./images/menu_card.jpg" alt="" />

        </div>
    </div>
    </>
  )
}

export default Vision