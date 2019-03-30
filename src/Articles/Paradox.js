import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Task.css'

const Paradox = (props) => {
    return ( 
        <>
            <section className='article'>
                <p className='title'>{props.match.params.id}</p>
                <p className='content'>{props.location.state.content}</p>
                <Link to={'/paradox'}>Powrót do listy zadań<i className="fas fa-arrow-right"></i></Link>
            </section>
        </>
     );
}
 
export default Paradox;