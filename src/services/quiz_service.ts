import {InitialQuestionType,QuizQuestionType} from '../types/quiz_dTypes';
function randomSort(array:QuizQuestionType[]){
    for(let i:number=0;i<array.length;i++){
        let options = array[i].options;
            for(let j = 0 ;j<options.length;j++){    
                let location= Math.round((Math.random()*10/2));
                if(location<options.length){
                    let temp  =options[j];
                    options[j] = options[location];
                    options[location] = temp;
                }
        }
    }
}

export const getQuizData=async(totalQuestions:number,difficultyLevel:string):Promise<QuizQuestionType[]>=>{
    const response = await fetch('http://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple');
    let data = await response.json();
    let results = data.results;
    console.log(results);
    let questions:QuizQuestionType[] = 
                results.map((questionObj:InitialQuestionType,index:number):QuizQuestionType=>{
                    return{ 
                        question:questionObj.question,
                        correct_answer:questionObj.correct_answer,
                        options:[...questionObj.incorrect_answers,questionObj.correct_answer]
                    };
    });
    
    randomSort(questions);
    return questions;
}