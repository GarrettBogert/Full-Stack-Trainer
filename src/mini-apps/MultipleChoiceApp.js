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
    //userHasGuessed will allow the display to indicate whether the guess was correct or not
    const [userHasGuessed, setUserHasGuessed] = useState(false);
    //The index of the current question from the quizPool being displayed.
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState();
    const [correctlyAnsweredQuestions, setCorrectlyAnsweredQuestions] = useState([]);
    const [incorrectlyAnsweredQuestions, setIncorrectlyAnsweredQuestions] = useState([]);
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

    const handleSubmitClick = () => {
        setUserHasGuessed(true);
        //If user guessed question right...
        if (currentlySelectedAnswer === currentQuestion.correctAnswer) {
            //We add the current question to the list of correctly answered questions.
            setCorrectlyAnsweredQuestions(prevAnswered => [...prevAnswered, currentQuestion]);
        }
        else {
            setIncorrectlyAnsweredQuestions(prevAnswered => [...prevAnswered, currentQuestion]);
        }
        //We filter out the answered question from the pool, to avoid it being presented twice.  
        setQuestionPool(oldPool => oldPool.filter((question, index) => index !== currentQuestionIndex));
        setCurrentlySelectedAnswer(null);
    }

    const populateNextQuestion = () => {
        if (questionPool.length > 0) {
            let question = getRandomQuestion(questionPool);
            setCurrentQuestion(question);
            setUserHasGuessed(false);
            setCurrentlySelectedAnswer(null)
        }
        else {
            window.alert("Quiz complete!")
        }
    };

    const handleCancelQuizClick = () => {
        setUserHasGuessed(false);
        setIncorrectlyAnsweredQuestions([]);
        setCorrectlyAnsweredQuestions([]);
        setCurrentQuestion(null);
        setQuizActive(false);
        setCurrentlySelectedAnswer(null);
        setQuestionPool([]);
        setCurrentQuestionIndex(null);
    }

    const handleNextQuestionClick = () => {
        populateNextQuestion();
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
                setQuizActive(true);
                let firstQuestion = getRandomQuestion(requestedQuestions);
                setCurrentQuestion(firstQuestion);

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
                                        disabled={userHasGuessed}
                                        type="radio"
                                        value={index}
                                        name={'questionChoice'} />
                                    {userHasGuessed && index === currentQuestion.correctAnswer ? choice + '(Correct)' : choice}
                                </>)
                        })}
                    </div>
                </>
                : null}
            {quizActive ?
                <>
                    <label>{`${correctlyAnsweredQuestions.length} correct answers.`}</label>
                    <label>{`${incorrectlyAnsweredQuestions.length} incorrect answers.`}</label>
                </>
                : null
            }


            {quizActive ? <><button
                className='greybutton'
                onClick={userHasGuessed ? handleNextQuestionClick : handleSubmitClick}>
                {userHasGuessed ? 'Next Question' : 'Submit Answer'}
            </button>
                <button
                    onClick={handleCancelQuizClick}>
                    Cancel quiz
                </button>
            </>
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


