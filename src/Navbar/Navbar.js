import { Component } from 'react';
import Compose from '../ComposeComponent/modal/Composecomp';
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'
class Navbar extends Component{

render(){
    return(
        <header className={classes.head}>
        <nav className={classes.navi}>
            <Compose/>
            <hr/><hr/><hr/>
            <p><Link to='/inbox'>Inbox</Link></p>
            <p><Link to='/drafts'>Drafts</Link></p>
            <p><Link to='/sent'>Sent</Link></p>
            <p><Link to ='/trash'>Trash</Link></p>
        </nav>
        </header>
    )
}



}

export default Navbar