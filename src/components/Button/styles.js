import styled from "styled-components";

export const Btn = styled.button`
    background-color: ${props =>props.backroundColor};
    color: ${props=> props.color};
    border-color: ${props=>props.boderColor};
    border: ${props=>props.boder};
    border-width: ${props=>props.boderWidth};
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 4px;
    font-weight: normal;
    font-weight: bold;
    width: ${props=>props.width};
    height: 35px;
    margin: ${props=> props.margin};
`