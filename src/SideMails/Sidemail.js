import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Mailtemplate from './mailtemplate/mailtemplate'
import classes from './Sidemail.module.css'



class Sidemail extends Component{



// onsideclic=()=>{
//     this.setState({showmail:true})
//     console.log(this.state.showmail);
// }

render(){
    console.log(this.props);

    

let mailcontent=<h3>Select a mail</h3>
// console.log('inrender');
if(this.props.match.params.id){
    this.props.allmails.forEach(e=>{
        
        if(e.id===this.props.match.params.id){

            mailcontent=  <Mailtemplate key={e.id} obj={e}/>
        }

    })  
}


    return(
    <div  className={classes.sidemail}>
    {mailcontent}
    </div>
    )

}


}

const mapStateToprops=(state)=>{
    return{
        allmails:state.mails
    }
}


export default connect(mapStateToprops)(withRouter( Sidemail))