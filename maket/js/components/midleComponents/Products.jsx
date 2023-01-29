import React from "react";
import Product from "../elementUI/Product.jsx";

export default (props)=>{
    return props.idList.map(elem=><Product key={props.prodList[elem].url} idProd={elem} prodList={props.prodList}/>)
}