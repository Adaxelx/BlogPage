import React from 'react';
import '../PageStyles/OtherPage.css'
import {Link} from 'react-router-dom'
 
const OtherPage = () => {
    return ( 
        <section className='otherPage'>
                <div className='section'>Inne</div>
                <Link to='/other/photos'>
                    <p>Zdjęcia</p>
                </Link>
                <Link to='/other/websites'>
                    <p>Polecane strony</p>
                </Link>
                <Link to='/other/charts'>
                    <p>Wykresy</p>
                </Link>
                <div className='section'>Inne</div>
        </section>
     );
}
 
export default OtherPage;