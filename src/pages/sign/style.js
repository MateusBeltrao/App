import styled from "styled-components";
import img from "../../components/image/1990213.webp"

export const SignIn = styled.div`

    .Counter{
        display: flex;
        height: 100vh;
        
    }
    .Parte1{
        flex-basis: 58%;
        color: #fff;
        background-image: url(${img});   
        background-repeat: no-repeat;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    .Parte1 h1{
        font-size: 30px;
        text-align: center;
        
    }

    .Parte1 p{
        font-size: 15px;
    }
    .Parte2{
        flex-basis: 42%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .Cad{
        margin-top: 70px;
   
   
` 