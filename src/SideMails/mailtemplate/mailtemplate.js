import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import classes from './mailtemplate.module.css'

const element = <FontAwesomeIcon icon={faUserCircle} />

const Mailtemplate=(props)=>{

return(
    <div className={classes.templatee}>
    <h1 style={{textAlign:'center'}}>{props.obj.subject}</h1>


    <hr/>

<div className={classes.senderprof}>
<span style={{fontSize:'80px', marginRight:'40px'}}>{element}</span>
<div>
<h3 style={{fontWeight:'500',lineHeight:'1'}}>{props.obj.from}</h3>
<p style={{color:'#aaa'}}>{props.obj.time.split('T')[0]}</p>

</div>
</div>



<h4 style={{padding:'10px',fontWeight:'400',fontSize:'18px' }}>To:&nbsp;&nbsp;{props.obj.to}</h4>



<p style={{fontWeight:'200',fontSize:'16px',padding:'10px'}}>{props.obj.body}</p>

    </div>

)

}

export default Mailtemplate;