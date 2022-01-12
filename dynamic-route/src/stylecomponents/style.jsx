import styled from "styled-components";

export const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  $p:hover & {
    fill: rebeccapurple;
  }
`;

export const Div = styled.div`
  border: 1px solid black;
  margin-top: 20px;
`;


export const Nav = styled.div`
    height: 60px;
    width: 100%;
    background-color: black;
    display: flex;
    color: white;
    & > h1 {
        margin-top: 6px;
        margin-left: 60px;
    }
    & .innerDiv {
        width: 100%;
        margin-left: 60px;
        margin-right: 100px;
        display: flex;
        justify-content: end;
    }
    & .innerDiv  p {
        text-decoration: none;
        margin: 10px;
        color: white;
        padding: 8px 15px;
        float: right;
    }
    & .innerDiv p:hover {
        background-color: gray;
        border-radius: 10px;
    }
`;