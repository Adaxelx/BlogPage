import React from 'react';
import '../PageStyles/AboutPage.css'

let off;
let height;
let windowH = window.innerHeight;

class AboutPage extends React.Component {
  state = { 
    active: [
        false,
        false,
        false,
        false,
      ],
  }

  handleScroll = () =>{
  let scrollV = window.scrollY;
  const tabDivs = [this.art1,this.art2,this.art3,this.art4]

  tabDivs.forEach((div,i) => {
    off = div.current.offsetTop
    height = div.current.offsetHeight;
    const actives = this.state.active;
    if(off<scrollV+windowH-height/4){
        actives[i] = true;
       this.setState({
            actives
       })
    }
    // else{
    //     actives[i]= false;
    //     this.setState({
    //         actives
    //     })
    //   }
    })
  } 

art1 = React.createRef();
art2 = React.createRef();
art3 = React.createRef();
art4 = React.createRef();


  componentDidMount() {
      window.scrollTo(0,0)
      setTimeout(this.handleScroll,3000);
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  
   render(){
    return ( 
        <section className='aboutPage'>
         <section className='container'>
          <article ref={this.art1} className={this.state.active[0] ? 'active' : ''}>
             <p className='mainWords'>Some title happens here</p>
             <p className='content'>
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </article>
          <article ref={this.art2} className={this.state.active[1] ? 'active' : ''}>
            <p className='mainWords'>Some title happens here</p>
             <p className='content'>
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </article>
          <article ref={this.art3} className={this.state.active[2] ? 'active' : ''}>
            <p className='mainWords'>Some title happens here</p>
              <p className='content'>
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </article>
          <article ref={this.art4} className={this.state.active[3] ? 'active' : ''}>
             <p className='mainWords'>Some title happens here</p>
             <p className='content'>
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </article>
         </section>
        </section>
     );
   }
}
 
export default AboutPage;