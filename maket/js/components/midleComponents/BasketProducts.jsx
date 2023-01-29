import React from "react";
import BasketProduct from '@elementUI/BasketProduct.jsx'

export default (props)=>{
    return props.idList.map(el=>
        <BasketProduct key={props.prodList[el].url} id={el} prodList={props.prodList}/>
    )
}