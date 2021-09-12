import React from 'react'
import mealSvg from "../../assets/meal2.svg"
import { useHistory } from 'react-router'

import { FormContainer, Header, LoginContainer,StyledButton,StyledForm,StyledImg, StyledInput } from './LoginStyle'

const Login = ({setIsAuth}) => {
    let history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsAuth(true)
        history.push("/")
    }

    return (
        <LoginContainer>
            <FormContainer>
                <StyledImg src={mealSvg} alt="meal"/>
                <Header>{"<Hakan/>"} Recipe</Header>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInput type="text" placeholder="Username" required/>
                    <StyledInput type="password" placeholder="Password" required/>
                    <StyledButton type="submit">Login</StyledButton>
                </StyledForm>
            </FormContainer>
        </LoginContainer>
    )
}

export default Login
