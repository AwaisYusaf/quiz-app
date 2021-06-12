import React, { useState } from 'react';
import { QuizQuestionType } from '../types/quiz_dTypes';
import styled from 'styled-components';
function QuestionCard({question,options,callback}:any){
    const [selected,setSelected] = useState<string>('');

    function handleClick(e:React.MouseEvent){
        e.preventDefault();
        let value = e.currentTarget.firstElementChild?.innerHTML;
        if(typeof value === 'string'){
            setSelected(value);
        }
    }

    function submitAnswer():void{
        if(selected!==''){
            callback(selected);
            setSelected('');
        }
    }


    return(
        <Container>
            <p>{question}</p>
            <OptionsContainer>

                {options.map((option:string,index:number)=>{
                    return (<Option onClick={(e)=>handleClick(e)} key={index}>
                    <p>{option}</p>
                    <ImageContainer>
                        {selected===option?
                        <TickImage src={'/tick.png'}/>:null}
                    </ImageContainer>
                </Option>);
                })}
            </OptionsContainer>

            <SubmitButton onClick={()=>submitAnswer()}>
                <p>Submit</p>
            </SubmitButton>
        </Container>
    );
}

const TickImage = styled.img`
    width:25px;
    margin-left:-35px;

`
const ImageContainer = styled.div`  


`
const OptionsContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    p{
        text-align:center;
    }
`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:rgba(255,255,255,0.85);
    margin : 0 180px;
    padding : 30px 0;
    @media(max-width:800px){
        margin:0;
        padding:20px 10px;
        height:70vh;
    }
`
const Option = styled.div`
    background-color:rgba(0,0,0,0.2);
    padding:2px 0;
    &:hover{
        background-color:transparent;
        color:rgba(0,0,0);
        box-shadow:0px 0px 20px rgba(0,0,0,0.5);
        transform:scale(1.02);
    }
    width:70%;
    margin:5px 0;
    color:rgba(0,0,0,0.5);
    text-transform:uppercase;
    border-radius:200px;
    cursor:pointer;
    display:flex;
    justify-content:space-around;
    p{
        text-align:center;
        flex:1;
    }
    div{
        display:flex;
        align-items:center;
        flex:0;
    }
`

const SubmitButton = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(10deg, rgba(2,2,37,0.5) 0%, 
    rgba(184,121,38,0.8463760504201681) 25%, 
    rgba(198,109,20,1) 96%, 
    rgba(135,69,7,0.7679446778711485) 100%);
    color:white;
    border-radius:150px;
    padding:0 25px;
    cursor:pointer;
    transition:all 0.1s ease-in;
    &:hover{
        background-color:rgba(184,121,98) ;
        opactiy:0.4;
        box-shadow:0px 0px 10px rgba(0,0,0,0.2);
        transform:scale(1.05);
    }
`


export default QuestionCard;