import React from 'react';

const Article = (props) => {
    return (  
    <article>
        <div className='imgHolder'></div>
        <p className='title'>{props.title}</p>
     </article>
    );
}
 
export default Article;