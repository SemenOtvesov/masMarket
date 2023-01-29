import React from "react";
import Products from '@midleComponents/Products.jsx'

export default (props)=>{
    return(
        <div className="main">
            <div className="main__container">
                <div className="mainContentFlexBox__title">Избранное</div>
                <div className="mainContentFlexBox">
                    <Products  idList={[1, 3, 2, 6, 8]} prodList={props.prodList}/>
                </div>
                <div className="mainContentFlexBox around">
                    <Products idList={[11, 38]} prodList={props.prodList}/>
                </div>
                <div className="mainContentFlexBox">
                    <Products  idList={[13, 45, 52, 56, 84]} prodList={props.prodList}/>
                </div>
            </div>
        </div>
    )
}