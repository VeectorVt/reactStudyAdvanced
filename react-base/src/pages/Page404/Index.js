import React from "react";

import { Container } from "../../styles/GlobalStyles";

export default function Page404() {
      console.log('Renderizou 404');
    return (
        <div>

            <Container>
                <h1>404 - Página não encontrada</h1>
                <p>Desculpe, a página que você está procurando não existe.</p>
            </Container>
        </div>
    );
}
// This file is part of the React Base project.
// It defines a simple 404 error page component that displays a message when the user navigates
