// Roteamento em react em um arquivo separado
// em vue é feito na mesma estrutura porém no app immportamos router-view ,
// o arquivo equivalente ao Routes em react é o index.js dentro da pasta routes porém a estrutura é de arrays com objetos
import React from "react";
import { Switch } from "react-router-dom";
import { toast } from "react-toastify";

import MyRoute from "./MyRoute.js";
import Login from "../pages/Login/Index.js";
import Page404 from "../pages/Page404/Index.js";

// Componente User temporário para teste
const User = () => {
    console.log('Renderizou user');
    return (
    <h1>Página do usuário</h1>
)


}

export default function Routes() {
    toast.success("Rota carregada com sucesso!");
    toast.error("error");

    return (

        <Switch>
            <MyRoute path="/" exact component={Login}  />
            <MyRoute path="/login" component={Login} />
            <MyRoute path="/user" component={User} isClosed />
            <MyRoute component={Page404} />
        </Switch>

    )

}


