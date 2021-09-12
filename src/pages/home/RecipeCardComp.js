import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '../../components/header/HeaderStyle'
import { RecipeCard, RecipeHeader, RecipeImage } from './HomeStyle'
import defaultImg from "../../assets/default-image.jpg"


const RecipeCardComp = ({recipe}) => {
    const history = useHistory();
    const moreClick = () => {
        //here we are going to use useHistory to direct to details page
        history.push({
            pathname: "/details",
            recipe : recipe // here we send recipe as props to details page for later use
        })
    }
    
    return (
        <RecipeCard>
            <RecipeHeader>
                {recipe.label}
            </RecipeHeader>
            <RecipeImage src={recipe?.image ?? defaultImg} alt = "recipe image"/>
            <Button onClick = {moreClick}>
                View More
            </Button>
        </RecipeCard>
    )
}

export default RecipeCardComp
