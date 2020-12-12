import { Component } from "react";
import { connect } from "react-redux";
import MailListItem from "./MailListItem/MailListItem";
import classes from './mailList.module.css'
import { Link } from "react-router-dom";

class MailList extends Component{
    render(){
// console.log(this.props);

let head= <h2 style={{fontWeight:'400'}}>INBOX</h2>
let mailtag=this.props.loopinboxdata.map(e=>{
    return(<Link key={e.id} to={'/inbox/'+e.id }>

        <MailListItem  obj={e}/>
    </Link>
        )
    })
    
    if (this.props.load==='drafts') {
        head= <h2 style={{fontWeight:'400'}}>DRAFTS</h2>
        mailtag=this.props.loopdraftdata.map(e=>{
            return(<Link key={e.id} to={'/drafts/'+e.id }>

                <MailListItem  obj={e}/>
            </Link>
                )
            })
    }
    if (this.props.load==='sent') {
        head= <h2 style={{fontWeight:'400'}}>SENT MAILS</h2>
        mailtag=this.props.loopsentdata.map(e=>{
            return(
                <Link key={e.id} to={'/sent/'+e.id }>

                <MailListItem obj={e}/>
            </Link>
                )
            })
    }
    


        return(

            <div className={classes.overallist}>
            <div>
               {head}
            </div>
            {mailtag}
            </div>

        )
    }
}

const mapStateToProps=state=>{

return{
    
    loopinboxdata:state.inbox,
    loopdraftdata:state.drafts,
    loopsentdata:state.sent

}


}

export default connect(mapStateToProps)(MailList);