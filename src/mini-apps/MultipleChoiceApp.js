import React, { useState, useEffect } from 'react';
import Checkbox from '../Checkbox.js';
import * as Questions from '../PrefabQuizzes/Quizzes.js';

export default function MultipleChoiceApp(props) {

    const getLocalStorageQuizzes = () => {
        const rawQuizzes = JSON.parse(localStorage.getItem('quizzes'));
        return rawQuizzes ?? [];
    };

    const [quizActive, setQuizActive] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    //userHasGuessedWrong will allow the display to indicate an incorrect guess, as well as hide the submit button so they cant guess twice.
    const [userHasGuessedWrong, setUserHasGuessedWrong] = useState(false);
    //The index of the current question from the quizPool being displayed.
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState();
    const [correctlyAnsweredQuestions, setCorrectlyAnsweredQuestions] = useState([]);
    const [incorrectlyAnsweredQuestions, setincorrectlyAnsweredQuestions] = useState([]);
    const [currentlySelectedAnswer, setCurrentlySelectedAnswer] = useState(null);

    //quizPool is a collection of quizzes that will get initialized once a quiz is started with categories selected. 
    const [questionPool, setQuestionPool] = useState([]);

    const [userQuestions, setUserQuestions] = useState(getLocalStorageQuizzes())

    function getRandomQuestion(quizPool) {
        if (quizPool.length > 0) {
            let currentQuizIndex = Math.floor(Math.random() * quizPool.length - 1) + 1;
            setCurrentQuestionIndex(currentQuizIndex);
            return quizPool[currentQuizIndex];
        }
    }

    const handleSubmitClick = (event) => {

       if(currentlySelectedAnswer === currentQuestion.correctAnswer){
        setCorrectlyAnsweredQuestions(...correctlyAnsweredQuestions, currentQuestion);
        setQuestionPool(questionPool.filter((question,index) => index !== currentQuestionIndex));
        setCurrentQuestion(null);
        setCurrentlySelectedAnswer(null);
        //TODO: resolve the problem here where questionPool hasn't yet been updated by the asynchronous setQuestionPool call above.
        if (questionPool.length > 0) {
            let question = getRandomQuestion(questionPool);           
                setCurrentQuestion(question);            
        }
        else {
            window.alert("Quiz complete!")
        }
       }
       else{
           setUserHasGuessedWrong(true);
       }
    }

    function populateNextQuestion(questionPool) {
        let question = getRandomQuestion(questionPool);
        setCurrentQuestion(question);
        setUserHasGuessedWrong(false);
    }

    const handleNextQuestionClick = () =>{
        populateNextQuestion(questionPool);
    }

    const onChangeSelectedAnswer = (event) => {
        setCurrentlySelectedAnswer(parseInt(event.target.value));        
    }

    const handleStartQuizClick = () => {
        if (props.checkedCategories.length > 0) {
            let requestedQuestions = Questions.getPool(props.checkedCategories, userQuestions);
            if (requestedQuestions.length > 0) {
                //The useEffect hook on quizPool will cause the next quiz to display after this call finishes.
                setQuestionPool(requestedQuestions);
                setQuizActive(!quizActive);
                //TODO: refactor this next call - ideally it would be reading from quizPool, but at this time, quizPool hasn't been populated by the asynchronous call. 
                populateNextQuestion(requestedQuestions);
            }
            else {
                window.alert("Selected categories contained no quizzes");
            }
        }
        else {
            window.alert("Please check at least one category to start a quiz session")
        }
    }

    return (
        <>
            {currentQuestion !== null ?
                <>
                    <div>
                        {currentQuestion.question}
                    </div>
                    <div onChange={onChangeSelectedAnswer} className='multipleChoice'>
                        {currentQuestion.answerChoices.map((choice, index) => {
                            return (
                                <>
                                    <input 
                                    disabled={userHasGuessedWrong} 
                                    type="radio" 
                                    value={index} 
                                    name={'questionChoice'} /> 
                                    {userHasGuessedWrong && index === currentQuestion.correctAnswer? choice + '(Correct)': choice }
                                </>)
                        })}
                    </div>
                </>
                : null}


            {quizActive ? <button
                className='greybutton'
                onClick={userHasGuessedWrong? handleNextQuestionClick: handleSubmitClick}>
                {userHasGuessedWrong? 'Next Question' : 'Submit Answer'}
            </button>
                : <button
                    className='greybutton'
                    onClick={handleStartQuizClick}>
                    Start Quiz
            </button>}

            {quizActive ? null : <div className='selectCategoriesContainer'>
                {props.categories.map(category => {
                    return (<Checkbox
                        disabled={quizActive}
                        label={category}
                        isChecked={props.checkedCategories.includes(category)}
                        onCheckboxChange={props.handleCategoryCheckboxChange}
                        key={category}
                    />)
                })}
                {props.userCategories.map(category => {
                    return (<Checkbox
                        disabled={quizActive}
                        label={category}
                        isChecked={props.checkedCategories.includes(category)}
                        onCheckboxChange={props.handleCategoryCheckboxChange}
                        key={category}
                    />)
                })}
            </div>}

        </>
    )
}



