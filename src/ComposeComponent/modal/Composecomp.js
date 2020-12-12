import React, { Component } from 'react'
import Modal from './modal';


class Compose extends Component{
    
    state={
        modalopen:false
          }
        
          show=()=>{
            this.setState({modalopen:true})
          }
        
          hide=()=>{
            this.setState({modalopen:false})
            
          }
        
        
        render=()=>{
        
          let modal=null
        
          if(this.state.modalopen){
            modal=(
              <Modal hideit={this.hide}></Modal>
            )
          }
        
        
          return (
            <div className="App">
            {modal}
        
            <div >
              <button onClick={this.show}>Compose</button>
            </div>
            </div>
          );
        }


}

export default Compose;