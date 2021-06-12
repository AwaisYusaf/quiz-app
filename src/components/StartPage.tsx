import React from 'react'
import styled from 'styled-components';
function StartPage({callBack}:any) {
    return (
        <Container>
            <h3>Quiz App By M.Awais</h3>
            <p>This is a sample quiz application, developed using TypeScript with React.
                <br/> Click <strong>Start</strong> button to start the Quiz.
            </p>
            <h3>Initial Score:</h3>
            <h2>-/4</h2>
            <StartButton onClick={()=>{callBack('')}}>START NOW</StartButton>
        </Container>
    )
}
const StartButton = styled.button`
    outline:none;
    border:none;
    cursor:pointer;
    margin:20px 0 ;
    background-color:rgba(0,0,0);
    color:white;
    padding:8px 24px;
    font-size:15px;
    border-radius:150px;
    transition:0.1s;
    &:hover{
        background-color:transparent;
        color:black;
        border:2px black solid;
    }
`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:rgba(255,255,255,0.85);
    margin : 0 180px;
    padding : 30px 0;
    height:70vh;
    @media(max-width:800px){
        margin:0;
        padding:20px 10px;
        height:70vh;
    }
`


export default StartPage;