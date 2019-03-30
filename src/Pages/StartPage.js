import React from 'react';
import '../PageStyles/StartPage.css'
import {NavLink} from 'react-router-dom';
import img from '../images/triangles.png'
const StartPage = () => {
    return ( 
        <section className='startPage'>
            <section className='titles'>
                <h1>Jesteś na stronie</h1>
                <h1>Lorem</h1>
                <h1>Ipsum</h1>
                <h3>Matematyka z pasją</h3>
            </section>
            <div className='imgCon'>
                <img src={img} alt=''/>
            </div>
            <NavLink to='./about'><p className='continue'>Jeżeli chcesz dowiedzieć się więcej kliknij <i className="fas fa-arrow-right"></i></p></NavLink>
        </section>
     );
}

 
export default StartPage;