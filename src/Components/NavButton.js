import React from 'react';
import '../Styles/NavButton.css'
import {NavLink} from 'react-router-dom';



class NavButton extends React.Component {
    state = {  
        open: false,
        hideLi: false,
    }

    handleClick = () =>{
        
        if(this.state.open===true){
            this.setState({
                hideLi: true,
            })
            setTimeout(this.changeClasses,1500);
        }else{
            this.setState({
                open: !this.state.open,
            })
        }
    }
    changeClasses = ()=>{
        this.setState({
            open: !this.state.open,
            hideLi: false,
        })
    }

    list = [
        { name:"Start" , path: "/", exact: true},
        { name:"O mnie" , path: "/about"},
        { name:"Artykły" , path: "/articles"},
        { name:"Zadania" , path: "/tasks"},
        { name:"Paradoksy" , path: "/paradox"},
        { name:"Inne" , path: "/other"},
    ]

    render() { 
        const menu = this.list.map(link => <li onClick={this.handleClick}key={link.name} className={this.state.open ? this.state.hideLi ? 'show hide' : 'show' : ''}><NavLink  to={link.path} exact={link.exact ? link.exact : false }>{link.name}</NavLink></li>)
        return (
            <>
         <nav className='burgerContainer' onClick={this.handleClick}>
            <p className={this.state.open ? 'topBar open' : 'topBar back' }></p>
            <p className={this.state.open ? 'midBar open' : 'midBar back' }></p>
            <p className={this.state.open ? 'botBar open' : 'botBar back' }></p>
        </nav>
        <nav className={this.state.open ? 'openedNav show' : 'openedNav'}>
          <ul>
              {menu}
          </ul>
        </nav>
        <div className={this.state.hideLi ? 'left' : "left show"}></div>
        <div className={this.state.hideLi ? 'right' : "right show"}></div>
            </>
        );
    }
}
 
export default NavButton;