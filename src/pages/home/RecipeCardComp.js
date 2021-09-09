import React from 'react'
import { Button } from '../../components/header/HeaderStyle'
import { RecipeCard, RecipeHeader, RecipeImage } from './HomeStyle'
import defaultImg from "../../assets/default-image.jpg"
const RecipeCardComp = ({recipe}) => {
    return (
        <RecipeCard>
            <RecipeHeader>
                {recipe.label}
            </RecipeHeader>
            <RecipeImage src={recipe?.image ?? defaultImg} alt = "recipe image"/>
            <Button>
                View More
            </Button>
        </RecipeCard>
    )
}

export default RecipeCardComp
