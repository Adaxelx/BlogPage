import React from 'react';
import '../Styles/Pages.css'
import {Route, Switch} from 'react-router-dom'

import StartPage from '../Pages/StartPage.js'
import AboutPage from '../Pages/AboutPage.js'
import Article from '../Articles/Article.js'
import ArticlesPage from '../Pages/ArticlesPage.js'
import Task from '../Articles/Task.js'
import TasksPage from '../Pages/TasksPage.js'
import Paradox from '../Articles/Paradox.js'
import ParadoxPage from '../Pages/ParadoxPage.js'
import OtherPage from '../Pages/OtherPage.js'
import Galery from '../Other/Galery.js'
import Websites from '../Other/Websites.js'
import Charts from '../Other/Charts.js'
import NavButton from '../Components/NavButton.js'

const Start = () => {
    return (  
        <>
            <Switch>
                <Route path='/' exact component={StartPage}/>
                <Route path='/about' exact component={AboutPage}/>
                <Route path='/articles' exact component={ArticlesPage}/>
                <Route path='/articles/:id' exact component={Article}/>
                <Route path='/tasks' exact component={TasksPage}/>
                <Route path='/tasks/:id' component={Task}/>
                <Route path='/paradox' exact component={ParadoxPage}/>
                <Route path='/paradox/:id' exact component={Paradox}/>
                <Route path='/other' exact component={OtherPage}/>
                <Route path='/other/photos' exact component={Galery}/>
                <Route path='/other/websites' exact component={Websites}/>
                <Route path='/other/charts' exact component={Charts}/>
                <Route path='/:id/menu' exact component={NavButton}/>
                <Route component={StartPage}/>
            </Switch>
        </>
    );
}
 
export default Start;