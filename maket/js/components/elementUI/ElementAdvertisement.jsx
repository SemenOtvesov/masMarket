import React from "react"

export default (props)=>{
    return(
        <button className={buttonClass(props)}>
            <img src={props.sorce.url} alt={props.sorce.altText} />
        </button>
    )
}

function buttonClass(props){
    if(props.sorce.className){
        return props.type + 'Advertisement comonAdv ' + props.sorce.className
    }else{
        return props.type + 'Advertisement comonAdv '
    }
}