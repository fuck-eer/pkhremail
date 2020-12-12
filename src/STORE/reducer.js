import * as actiontypes from './actions'

const initialstate={
    "inbox": [
       {
          "id": "1",
          "from": "ievolve@tcs.com",
          "to": "user@tcs.com",
          "time": "2018-02-24T18:25:43.511Z",
          "subject": "Remainder"
        },
        {
          "id": "2",
          "from": "idm@tcs.com",
          "to": "user@tcs.com",
          "time": "2018-02-23T18:25:43.511Z",
          "subject": "TCS - IDM"
        }
    ],
    "drafts":[
        {
            "id": "102",
            "from": "lovelatre@tcs.com",
            "to": "draft@tcs.com",
            "time": "2018-02-24T18:25:43.511Z",
            "subject": "to be sent"
          },
    ],
    "sent":[
      {
          "id": "104",
          "from": "lovelatre@tcs.com",
          "to": "sent@tcs.com",
          "time": "2018-02-24T18:25:43.511Z",
          "subject": "is already sent"
        },
  ],
    "mails": [
       {
          "id": "1",
          "from": "ievolve@tcs.com",
          "to": "user@tcs.com",
          "subject": "Remainder",
          "time": "2018-02-24T18:25:43.511Z",
          "body": "Please complete your mandatory iEvolve course"
        },
        {
          "id": "2",
          "from": "idm@tcs.com",
          "to": "user@tcs.com",
          "subject": "TCS - IDM",
          "time": "2018-02-23T18:25:43.511Z",
          "body": "You are invited for a webex"
        },
        {
          "id": "102",
          "from": "lovelatre@tcs.com",
          "to": "draft@tcs.com",
          "time": "2018-02-24T18:25:43.511Z",
          "subject": "to be sent"
        },
        {
          "id": "104",
          "from": "lovelatre@tcs.com",
          "to": "sent@tcs.com",
          "time": "2018-02-24T18:25:43.511Z",
          "subject": "is already sent"
        },
    ],



  }

  const reducer=(state=initialstate,action)=>{


    switch (action.type) {
      case actiontypes.ADDTODRAFT:{
let d=new Date()
        const newobj={
id:Math.floor(Math.random()*100),
from:"user@tcs",
to:action.data.email,
time:d.toString(),
subject:action.data.content

        }

        return{
             ...state,
             drafts:[...state.drafts,newobj],
             mails:[...state.mails,newobj]

        }
      }

      case actiontypes.ADDTOSENT:{

        let d=new Date()
        const newobj={
id:Math.floor(Math.random()*100),
from:"user@tcs",
to:action.data.email,
time:d.toString(),
subject:action.data.content

        }

        return{
          ...state,
          sent:[...state.drafts,newobj],
          mails:[...state.mails,newobj]
        }
      }
    
      default:
        return state
    }


 
  }

  export default reducer;