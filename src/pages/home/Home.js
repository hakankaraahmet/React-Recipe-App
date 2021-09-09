import React,{useState,useEffect} from 'react'
import Header from "../../components/header/Header"
import { MainContainer} from './HomeStyle'
import axios from "axios"
import RecipeCardComp from './RecipeCardComp'


// We use mealTypes for select attribute 
const mealTypes = ["Breaktfast","Lunch","Dinner","Snack","Teatime"]
const APP_ID = "a998179b"
const APP_KEY = "4856bc6513c6d7a27f5217edba4b286c";

const Home = () => {
    const[query,setQuery] = useState("apple")  // querry is representing the search value 
    const[recipes,setRecipes] = useState()  // recipes are the result of api (list of menu)
    const[meal,setMeal] = useState(mealTypes[0].toLowerCase())  // meal is representing the meal type such as dinner,breakfats...

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

    const getData = async () => {  //getData is the main function that get the data from Api
        if(query !== ""){
            const result = await axios.get(url)
            if(result.status === 200){  // result.status === 200 gives result but 400 gives error
                setRecipes(result.data.hits)
            }
        }
        else{
            alert("please fill the form")
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Header
            // We send necessary props to Header
            query = {query}
            setQuery = {setQuery}
            mealTypes = {mealTypes}
            getData = {getData}
            meal = {meal}
            setMeal = {setMeal}
            />
            {recipes ? (
            <MainContainer>
                {/* We send recipes (data from api) to recipeCardComp with map function */}
                {recipes.map((recipe,index) => (
                    <RecipeCardComp key = {index} recipe = {recipe.recipe}/>
                ))}
            </MainContainer>

            ): null}
        </div>
    )
}

export default Home
