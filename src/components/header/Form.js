import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyle'

const Form = ({query,setQuery,mealTypes,getData,meal,setMeal}) => {

    const handleChange = (e) => {
        setMeal(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getData()
    }


    
    return (
        <div>
            <FormContainer onSubmit={handleSubmit}>
                <FoodInput
                type="text"
                value = {query}
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
                // here onChange is critical because it provide us to send a new query to Api
                />
                <Button>Search</Button>

                {/* We use handleChange to change value of select */}
                <Select name = "mealTypes" id = "mealTypes" onChange = {handleChange}> 
                    {mealTypes?.map((item,index) => (
                        <option value = {item.toLowerCase()} key = {index}>{item}</option>
                    ))}

                </Select>
            </FormContainer>
        </div>
    )
}

export default Form
