import React from 'react'
import {HeaderContainer, MainHeader} from "./HeaderStyle"
import Form from "./Form"
const Header = ({query,setQuery,mealTypes,getData,meal,setMeal}) => {
    return (
        <HeaderContainer>
            <MainHeader>Recipe App</MainHeader>
            <Form
            // We only assing MainHeader in this component. On the other hand we sen whole props to Form
            query = {query}
            setQuery = {setQuery}
            mealTypes = {mealTypes}
            getData = {getData}
            meal = {meal}
            setMeal = {setMeal}
            />
        </HeaderContainer>
    )
}

export default Header
