export type InitialQuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type QuizQuestionType = {
    question:string;
    options:string[];
    correct_answer:string
}
