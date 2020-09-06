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

        //Add logic to see the value (a number) of the currently selected radio button is equal to the correctAnswer.
        //Then if its wrong, we have to remove the currentQuiz from the pool and add it to one of the two answered arrays.
        const newQuestionPool = questionPool.filter((quiz, index) => index !== currentQuestionIndex);
        setQuestionPool(newQuestionPool);

        if (questionPool.length > 0) {
            let question = getRandomQuestion(questionPool);
            if (question !== null) {
                setCurrentQuestion(question);               
            }
        }
        else {
            window.alert("Quiz complete!")
        }
    }

    function populateNextQuestion(questionPool) {
        let question = getRandomQuestion(questionPool);
        setCurrentQuestion(question);
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
                    <div className='multipleChoice'>
                        {currentQuestion.answerChoices.map((choice, index) => {
                            return (
                                <>
                                    <input type="radio" value={index} name={choice} /> {choice}
                                </>)
                        })}
                    </div>
                </>
                : null}


            {quizActive ? <button
                className='greybutton'
                onClick={handleSubmitClick}>
                Submit Answer
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



