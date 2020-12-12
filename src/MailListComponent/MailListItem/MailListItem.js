import React from 'react'
import classes from './MaillistItem.module.css'


const MailListItem=(props)=>{

    return(
        <div className={classes.card}>
            <p style={{color:'#aaa',textAlign:'left'}}>{props.obj.from}</p>
            <h3 style={{textAlign:'center'}}>{props.obj.subject}</h3>
            <p style={{color:'#aaa',textAlign:'right'}}>{props.obj.time.split('T')[0]}</p>
        </div>
    )


}
export default MailListItem;