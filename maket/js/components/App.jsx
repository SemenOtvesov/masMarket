import React, {useEffect} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import {prodList} from './prodList.js'

import MainStartPage from '@mains/MainStartPage.jsx'
import MainUserOrderPage from '@mains/MainUser&OrderPage.jsx';
import MainFavoritesPage from '@mains/MainFavoritesPage.jsx';
import MainBasketPage from '@mains/MainBasketPage.jsx';

import UserProfile from '@midleComponents/UserProfile.jsx';
import Order from '@midleComponents/Order.jsx';

import Layout from './Layout.jsx';


export default ()=>{
    const location = useLocation()
    //fetch
    const user = {id:1, name:'Bob', subname:'Bingo', urlLogo:'./img/user/logo/1.png'}
    //fetch...

    window.addEventListener('click', windowListener)

    useEffect(()=>{
        equalSidesFn()

        const selects = document.querySelectorAll('#select')
        if(selects){buttonSelected(selects)}
    }, [location.pathname])

    return(
        <Routes>
            <Route  path='/' element={<Layout/>}>
                <Route index element={<MainStartPage prodList={prodList}/>}/>
                <Route path='userProfile' element={<MainUserOrderPage user={user} rigthContent={UserProfile}/>}/>
                <Route path='order' element={<MainUserOrderPage user={user} prodList={prodList} rigthContent={Order}/>}/>
                <Route path='favorites' element={<MainFavoritesPage user={user} prodList={prodList}/>}/>
                <Route path='basket' element={<MainBasketPage user={user} prodList={prodList}/>}/>
            </Route>
        </Routes>
    )
}

function windowListener(event){
    const target = event.target

    if(target.id === 'inputCh'){
        target.firstElementChild.classList.toggle('active')
    }else if(target.parentElement.id === 'inputCh'){
        target.parentElement.firstElementChild.classList.toggle('active')
    }

    if(target.getAttribute('id') === 'select'){
        return 
    }else if(target.parentElement.getAttribute('id') === 'select'){
        return 
    }else if(target.parentElement.parentElement.getAttribute('id') === 'select'){
        return
    }else{
        document.querySelectorAll('#select').forEach(el=>el.classList.remove('active'))
    }
}

function equalSidesFn(){
    const equalSidesElements = document.querySelectorAll('#equalSides')
    equalSidesElements.forEach(el=>el.style.height = el.offsetWidth + 'px')
}


function buttonSelected([...selects]){
    return selects.reduce((ac,select)=>{
        const selectButton = select.children[0].children.text ? 
                            select.children[0].children.text:
                            select.children[0]
        const selectItemsList = select.children[1]
        const selectItems = select.querySelectorAll('#selectItem')

        const initSelectValue = selectItemsList.querySelector('.selected').getAttribute('value')
        selectButton.innerHTML = initSelectValue

        let clickSelectBind;
        select.addEventListener('click', clickSelectBind = clickSelect.bind(this, select, selects, selectButton, selectItems))

        ac.push(clickSelectBind)
        return ac
    },[])
}



function clickSelect(select, selects, selectButton, selectItems, event){
    selects.forEach(el=>{if(el !== select){el.classList.remove('active')}})
    select.classList.toggle('active')

    if(event.target.id === 'selectItem'){

        selectItems.forEach(el=>el.classList.remove('selected'))
        event.target.classList.add('selected')

        selectButton.innerHTML = event.target.getAttribute('value')
    }
}
