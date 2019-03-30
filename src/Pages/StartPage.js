import React from 'react';
import '../PageStyles/StartPage2.css'

import {NavLink} from 'react-router-dom';
import img from '../images/tablica.jpg'

import AboutPage from './AboutPage.js'


class StartPage extends React.Component{
    
    state = {
        active: false
    }

    addClass = () => {
        this.setState({
            active: true
        })
    }

    componentDidMount(){
        setTimeout(this.addClass,2000)
    }
    render(){
        return ( 
            <>
            <section className='startPage'>
                <section className='titles'>
                    <p className={this.state.active ? 'active' : ''}>Loremlore</p>
                    <p className={this.state.active ? 'active' : ''}>Ipsumipsu</p>
                    <p className={this.state.active ? 'active' : ''}>Matematyka z pasją</p>
                </section>
                <div className='imgCon'>
                    <img src={img} alt=''/>
                </div>
                {/* <NavLink to='./about'><p className='continue'>Jeżeli chcesz dowiedzieć się więcej kliknij <i className="fas fa-arrow-right"></i></p></NavLink> */}
            </section>
            <AboutPage/>
            </>
         );
        
    }
    
    
}

 
export default StartPage;