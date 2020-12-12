export const ADDTODRAFT='addToDraft';
export const ADDTOSENT='addToSent';


export const addingtodraft=(obj)=>{
    return{
        type:ADDTODRAFT,
        data:obj
    }
} 

export const addingtosent=(obj)=>{
    return{
        type:ADDTOSENT,
        data:obj

    }
}