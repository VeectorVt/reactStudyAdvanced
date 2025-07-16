import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title , Paragrafo } from "./styled";

export default function Login(){
    return (
        <Container>
        <Title>Login Page</Title>
        <small>Login your account</small>

        <Paragrafo> Lorem ipsum Dolor sit amet </Paragrafo>

        <button>Login</button>
        </Container>
    )
}


