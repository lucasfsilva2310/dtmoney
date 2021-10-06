import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #FFFFFF;
    }

    border-style, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
 
    h1, h2, h3, h4, h5 ,h6 {
        font-weight: 600;
    } 

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    /* Pq essas medidas?
    Como a configuração de medida principal que vai ser utilizada será o REM, e o REM se baseia
    na font root do projeto, entao essas porcentagens se encaixam muito bem em resoluções menores */

    /*  Isso também é fundamental para acessibilidade, para pessoas que querem aumentar/diminuir a fonte
    de qualquer jeito, com as porcentagens isso se torna mais facil */
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body { 
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
