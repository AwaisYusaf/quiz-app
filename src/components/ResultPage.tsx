import React from 'react'
import styled from 'styled-components';
function ResultPage({callBack,marks}:any) {
    let status='';
    let color='';
    const total_marks = 4;
    const percentage = marks/total_marks*100;
    if(percentage<25){
        status='Fail';
        color='red';
    }
    else if(percentage>=25 && percentage<=50){
        status='Average';
        color='orange';
    }
    else if(percentage>50 && percentage<=75){
        status='Good';
        color='blue';
    }
    else if(percentage>75){
        status ='Excellent';
        color = 'green';
    }

    return (
        <Container>
            <h2>Thank you for your response!</h2>
            <h3>Your Score:</h3>
            <h2>{marks}/{total_marks}</h2>
            <h3 style={{display:'inline'}}>Status: <h3 style={{display:'inline',color:''+color}}>{status}</h3></h3>
            <br/><br/>
            <StartButton onClick={()=>callBack('')}>START QUIZ AGAIN</StartButton>
            <StartButton onClick={()=>callBack('go-to-first-page')}>GO TO FIRST PAGE</StartButton>
        </Container>
    )
}

const StartButton = styled.button`
    outline:none;
    border:none;
    cursor:pointer;
    background-color:rgba(0,0,0);
    color:white;
    padding:8px 24px;
    font-size:15px;
    margin:10px 0;
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
export default ResultPage;