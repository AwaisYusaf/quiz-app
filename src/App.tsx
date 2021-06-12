import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizData} from './services/quiz_service';
import { QuizQuestionType } from './types/quiz_dTypes';
import QuestionCard from './components/QuestionCard';
import Image from 'bg-photo.jpg';
import QuizData from './services/quiz_data.json';
import StartPage from './components/StartPage';
import ResultPage from './components/ResultPage';
import Header from './components/Header';
function App() {
  const [status,setStatus] = useState<string>('pending');
  const [quizQuestions,setQuizQuestions] = useState<QuizQuestionType[]>(QuizData['quiz-data']);
  const [ currentStep , setCurrentStep ] = useState<number>(0);
  const [marks,setmarks] = useState<number>(0);

  function handleSubmit(answer:string){
    if(answer===quizQuestions[currentStep].correct_answer){
      setmarks(marks+1);
    }

    if(currentStep<quizQuestions.length-1){
      setCurrentStep(currentStep+1);
    }
    else{
      calculateScore();
      setCurrentStep(0);
    }
  }
  function calculateScore():void{
    setStatus('finished');
  }

  function startQuiz(action:string){
    if(action===''){
      setStatus('started');
      setmarks(0);
    }
    else if (action==='go-to-first-page'){
      setStatus('pending');
    }
  }

  return (
      <div className="App">
        <Header/>
        {status==='pending'?<StartPage callBack={startQuiz}/>:null}
        {status==='started'?<QuestionCard 
        question={quizQuestions[currentStep].question} 
        options={quizQuestions[currentStep].options} 
        callback = {handleSubmit}/>:null}
        {status==='finished'?<ResultPage callBack={startQuiz} marks={marks}/>:null}
      </div>
    );
  }

export default App;
