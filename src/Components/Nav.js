import React from 'react';
import {NavLink} from 'react-router-dom'
import '../Styles/Nav.css'

let lastScrollY = 0;
let ticking = false;
let prevScrollY= window.pageYOffset;



class Nav extends React.Component{

    handleScroll = (e) => {
        lastScrollY = window.scrollY; 
        if (!ticking) {
            window.requestAnimationFrame(() => {
            if(prevScrollY < lastScrollY){
                this.nav.current.style.top = `-10%`
            }else{
                this.nav.current.style.top = `0%`
            }
            prevScrollY = lastScrollY;
            ticking = false;
        });
            ticking = true;
        }
    }

    nav = React.createRef();

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    list = [
        { name:"Start" , path: "/", exact: true},
        { name:"O mnie" , path: "/about"},
        { name:"Artykły" , path: "/articles"},
        { name:"Zadania" , path: "/tasks"},
        { name:"Inne" , path: "/other"},
    ]

    render(){
        const {list} = this;
        const menu = list.map(link => <li key={link.name}><NavLink to={link.path} exact={link.exact ? link.exact : false }>{link.name}</NavLink></li>)

    return( 
        <nav ref={this.nav}>
            <ul>
                {menu}
            </ul>
        </nav>
     );
    }
}
 
export default Nav;