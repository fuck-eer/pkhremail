

import { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import MailList from './MailListComponent/mailList';
import Navbar from './Navbar/Navbar';
import Sidemail from './SideMails/Sidemail';


class App extends Component {

  render(){
    return(
      <div className='layout'>

<Navbar />
<Route path='/' exact render={()=><MailList load='inbox'/>}/>
<Route path='/inbox' render={()=><MailList load='inbox'/>}/>
<Route path='/drafts' render={()=><MailList load='drafts'/>}/>
<Route path='/sent' render={()=><MailList load='sent'/>}/>
<Route path='/trash' render={()=><MailList load='trash'/>}/>

{/* <MailList/> */}
{/* <Sidemail /> */}
<Switch>
<Route path='/:domain/:id' render={()=><Sidemail />}/>
<Route path='/:domain' render={()=><Sidemail />}/>
<Route path='/' render={()=><Sidemail />}/>

</Switch>

      </div>

    )
  }
  
}

export default App;
