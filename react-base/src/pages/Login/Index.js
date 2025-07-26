import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";
import axios from "../../services/axios";

export default function Login() {
    React.useEffect(() => {
      async function getData(){
        const response = await axios.get('/');
        console.log(response.data); // Assuming the homeController returns some data
      }

      getData();
    } , [])

    return (
        <Container>
            <Title>Login Page</Title>
            <small>Login your account</small>

            <Paragrafo> Lorem ipsum Dolor sit amet </Paragrafo>

            <button>Login</button>
        </Container>
    )
}


