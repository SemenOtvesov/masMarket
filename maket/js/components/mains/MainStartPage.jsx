import React from 'react'

import Advertisement from '@elementUI/Advertisement.jsx'
import ElementAdvertisement from '@elementUI/ElementAdvertisement.jsx'

import TopProdust from '@elementUI/TopProdust.jsx'
import Products from '@midleComponents/Products.jsx'

export default (props)=>{
    return (
        <div className="main">
            <div className="main__container">
                <Advertisement sorce={{url:"./img/Advertisement/Advertisement-image.png",type:'img'}}/>
                <ElementAdvertisement type='line' sorce={{url:"./img/Advertisement/lineAdvertisement-image.png", altText:''}}/>
                <ElementAdvertisement type='line' sorce={{url:"./img/Advertisement/lineAdvertisement-sale-image.png", altText:''}}/>
                <TopProdust idList={[1, 3, 2, 6, 8]} prodList={props.prodList}/>
                <ElementAdvertisement type='line' sorce={{url:"./img/Advertisement/lineAdvertisement-sale-image.png", altText:''}}/>
                <div className="mainContentFlexBox">
                    <ElementAdvertisement type='mini' sorce={{url:"./img/Advertisement/miniAdvertisement-image.png", altText:''}}/>
                    <ElementAdvertisement type='mini'sorce={{url:"./img/Advertisement/miniAdvertisement-image.png", altText:''}}/>
                    <ElementAdvertisement type='mini'sorce={{url:"./img/Advertisement/miniAdvertisement-image.png", altText:''}}/>
                </div>
                <div className="mainContentFlexBox">
                    <Products idList={[1, 3, 2, 6, 8]} prodList={props.prodList}/>
                </div>
                <div className="mainContentFlexBox">
                    <ElementAdvertisement type='mini'sorce={{url:"./img/Advertisement/miniAdvertisement-image.png", altText:''}}/>
                    <ElementAdvertisement type='mini'sorce={{url:"./img/Advertisement/miniAdvertisement-image.png", altText:''}}/>
                    <ElementAdvertisement type='mini'sorce={{url:"./img/Advertisement/miniAdvertisement-image.png", altText:''}}/>
                </div>
                <div className="mainContentFlexBox">
                    <ElementAdvertisement type='midle' sorce={{url:"./img/Advertisement/midleAdvertisement-sale-image.jpg", altText:''}}/>
                    <ElementAdvertisement type='midle' sorce={{url:"./img/Advertisement/midleAdvertisement-sale-image.jpg", altText:''}}/>
                </div>
                <div className="mainContentFlexBox__title">Только до 24.01!</div>
                <div className="mainContentFlexBox">
                    <Products idList={[1, 3, 2, 6, 8]} prodList={props.prodList}/>
                </div>
                <div className="mainContentFlexBox">
                    <ElementAdvertisement type='midle' sorce={{url:"./img/Advertisement/midleAdvertisement-sale-image.jpg", altText:''}}/>
                    <ElementAdvertisement type='midle' sorce={{url:"./img/Advertisement/midleAdvertisement-sale-image.jpg", altText:''}}/>
                </div>
                <div className="mainContentFlexBox">
                    <Products idList={[1, 3, 2, 6, 8]} prodList={props.prodList}/>
                </div>
                <div className="mainContentFlexBox">
                    <ElementAdvertisement type='mini'sorce={{url:"./img/Advertisement/miniAdvertisement-image.png", altText:''}}/>
                    <ElementAdvertisement type='mini'sorce={{url:"./img/Advertisement/miniAdvertisement-image.png", altText:''}}/>
                    <ElementAdvertisement type='mini'sorce={{url:"./img/Advertisement/miniAdvertisement-image.png", altText:''}}/>
                </div>
                <ElementAdvertisement type='line' sorce={{url:"./img/Advertisement/lineAdvertisement-sale-image.png", altText:''}}/>
                <div className="mainContentFlexBox">
                    <Products idList={[1, 3, 2, 6, 8]} prodList={props.prodList}/>
                </div>
                <ElementAdvertisement type='line' sorce={{url:"./img/Advertisement/lineAdvertisement-sale-image.png", altText:''}}/>
            </div>
        </div>
    )
}