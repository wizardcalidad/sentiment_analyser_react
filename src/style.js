import styled from 'styled-components/macro'

export const CheckButton = styled.button`
    background : blue;
    text-align : center;
    justify-content : center;
    justify-self : center;
    width : 60%;
    height : 3rem;
    border : none;
    color : white;
    border-radius : 0.5rem;
    cursor: pointer;

    &:focus{
        outline : none;
    }

    &:hover{
        background : white;
        color : black;
    }
`;

export const Title = styled.h3`
    text-align : center;
    font-size : 20px;
    font-weight : bold;
    color : blue;
    padding : 2rem;

`;

export const Label = styled.label`
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    color: red;
    padding-left: 10px;

`;

export const Select = styled.select`
    color: blue;
    font-size: 15px;
    justify-content: right;
    width : 50%;
    margin-left : 10%;

`;

export const Container = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    justify-content : center;
    text-align : center;
    flex-direction : row;
    flex-wrap : nowrap;
`