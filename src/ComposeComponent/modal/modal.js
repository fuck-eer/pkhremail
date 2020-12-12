import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './modal.module.css'
import * as actionCreators from '../../STORE/actions'


class Modal extends Component{

state={

    
        email:'',
        content:''
    
}


 gettingemail=(event)=>{

this.setState({
    email:event.target.value
})

}

gettingcontent=(event)=>{

    this.setState({
        content:event.target.value
    })
    // console.log(event.target.value);
  
    
    }

    


   oncclliikk=()=>{
      console.log(this.props.draftData);
  }


  render(){

      return(
      <div className={classes.cont}  >
      <h1 className={classes.cross} onClick={this.props.hideit}>X</h1>
      <h3>Compose a new Mail</h3>
      <label>
          {/* email: */}
          <input placeholder='E-mail' type='email' required onChange={this.gettingemail} value={this.state.email}/>
      </label>
    
      <label>
          {/* content: */}
          <input placeholder='Content' type='text' required onChange={this.gettingcontent} value={this.state.content} />
      </label>
    
    
    
    <button onClick={()=>this.props.onSaveToDrafts({email:this.state.email,content:this.state.content})}>Save as draft</button>
    
    <button onClick={()=>this.props.onSending({email:this.state.email,content:this.state.content})}>Send mail</button>
    <button onClick={this.oncclliikk}>showw the data</button>
    
    
      </div>
      )
  }



}

const mapStateToProps=(state)=>{


    return{
        draftData:state.drafts,
        sentData:state.sent
    }

}

const mapDispatchToProps=(dispatch)=>{

return{
    onSaveToDrafts:(objj)=>dispatch(actionCreators.addingtodraft(objj)),
    onSending:(objj)=>dispatch(actionCreators.addingtosent(objj))
}

}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);