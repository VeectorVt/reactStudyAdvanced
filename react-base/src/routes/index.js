// Roteamento em react em um arquivo separado
// em vue é feito na mesma estrutura porém no app immportamos router-view ,
// o arquivo equivalente ao Routes em react é o index.js dentro da pasta routes porém a estrutura é de arrays com objetos
import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login/Index.js";
import Page404 from "../pages/Page404/Index.js";

// Componente User temporário para teste
const User = () => <h1>Página do Usuário</h1>;

export default function Routes() {
    return (

        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={User} />
            <Route  component={Page404} />
        </Switch>

    )

}


