import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Article.css'

const Article = (props) => {
    return ( 
        <>
            <section className='article'>
                <p className='title'>{props.location.state.title}</p>
                <p className='content'>{props.location.state.content}</p>
                <Link to={'/articles'}>Powrót do listy artykułów<i className="fas fa-arrow-right"></i></Link>
            </section>
        </>
     );
}
 
export default Article;