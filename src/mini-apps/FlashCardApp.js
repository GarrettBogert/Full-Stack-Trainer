import * as FlashCards from '../PrefabQuizzes/FlashCards.js';
import React, { useState, useEffect } from 'react';
import Checkbox from '../Checkbox.js';



export default function FlashCardApp(props) {

    const saveLocalStorageCards = (cards) => {
        localStorage.setItem('cards', JSON.stringify(cards));
    };

    const getLocalStorageCards = () => {
        const rawCards = JSON.parse(localStorage.getItem('cards'));
        return rawCards ?? [];
    };


    const [answerVisible, setAnswerVisible] = useState(false);
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("Click 'next question' for question");

    const [userCards, setUserCards] = useState(getLocalStorageCards())


    const handleToggleAnswerClick = () => {
        setAnswerVisible(!answerVisible);
    }

    const handleNextCardClick = (setQuestion, setAnswer) => {
        if (props.checkedCategories.length > 0) {
            let card = FlashCards.getRandom(props.checkedCategories, userCards);
            if (card !== null) {
                setQuestion(card.question);
                setAnswer(card.answer);
                setAnswerVisible(false);
            }
        }
        else {
            window.alert("Please check at least one category in order to display next question.")
        }
    }

    useEffect(() => {
        saveLocalStorageCards(userCards);
    }, [userCards]);

    return (
        <>
            <Card
                question={question}
                answer={answer}
                answerVisible={answerVisible}
                onClick={() => handleToggleAnswerClick()}
                onNextCardClick={() => handleNextCardClick(setQuestion, setAnswer)}
            />

            <div className='selectCategoriesContainer'>
                {props.categories.map(category => {
                    return (<Checkbox
                        label={category}
                        isChecked={props.checkedCategories.includes(category)}
                        onCheckboxChange={props.handleCategoryCheckboxChange}
                        key={category}
                    />)
                })}
                {props.userCategories.map(category => {
                    return (<Checkbox
                        label={category}
                        isChecked={props.checkedCategories.includes(category)}
                        onCheckboxChange={props.handleCategoryCheckboxChange}
                        key={category}
                    />)
                })}
            </div>
            <AddCard
                userCards={userCards}
                setUserCards={setUserCards}
                categories={props.categories}
                userCategories={props.userCategories} />
        </>
    )
}

function Card(props) {
    return (
        <>
            <div className='question'>{props.question}</div>
            <div className='answer'
                hidden={!props.answerVisible}>{props.answer}</div>
            <button 
            className='greybutton'
                onClick={props.onClick}>
                {props.isVisible ? 'Hide answer' : 'Show answer'}
            </button>
            <button
                className='greybutton'
                onClick={props.onNextCardClick}>
                Next question
        </button>
        </>
    )
}

function AddCard(props) {

    const [addCardQuestionText, setAddCardQuestionText] = useState();
    const [addCardAnswerText, setAddCardAnswerText] = useState();
    const [isAddingCard, setIsAddingCard] = useState(false);
    const [addCardSelectedCategory, setAddCardSelectedCategory] = useState('csharp');

    const handleNewCardClick = () => {
        setIsAddingCard(!isAddingCard);
    };

    const handleAddCardQuestionChange = (event) => {
        setAddCardQuestionText(event.target.value);
    };

    const handleAddCardAnswerChange = (event) => {
        setAddCardAnswerText(event.target.value);
    };

    const handleAddCardCategoryChange = (event) => {
        setAddCardSelectedCategory(event.target.value);
    }

    const handleConfirmAddCard = (question, answer, category) => {
        let card = {
            'question': question,
            'answer': answer,
            'category': category
        };
        props.setUserCards([...props.userCards, card])
        setIsAddingCard(!isAddingCard);
        clearAddCardForm();
    }

    const clearAddCardForm = () => {
        setAddCardQuestionText('');
        setAddCardAnswerText('');
        setAddCardSelectedCategory('csharp');
    }

    return (
        <>
            <img
                data-testid='addCard'
                onClick={handleNewCardClick}
                alt="missing"
                width='12px'
                height='12px'
                src={isAddingCard ? '/images/cancel.png' : '/images/add.png'}
                margin-right='3px' />
            {!isAddingCard ? <span>Add card</span>
                : <>
                    <label>Question</label>
                    <input 
                    type='text' 
                    value={addCardQuestionText} 
                    onChange={handleAddCardQuestionChange}
                    data-testid='addCardQuestion'
                    >
                    </input>
                    <label>Answer</label>
                    <input 
                    type='text' 
                    value={addCardAnswerText} 
                    onChange={handleAddCardAnswerChange}
                    data-testid='addCardAnswer'
                    >
                    </input>
                    <select 
                    value={addCardSelectedCategory} 
                    onChange={handleAddCardCategoryChange}
                    >
                        {props.categories.map(category => {
                            return (<option value={category}>{category}</option>)
                        })}
                        {props.userCategories.map(category => {
                            return (<option value={category}>{category}</option>)
                        })}
                    </select>

                    <button className='confirmCategory'
                        onClick={() => handleConfirmAddCard(addCardQuestionText, addCardAnswerText, addCardSelectedCategory)}>Confirm card
            </button>
                </>
            }
        </>
    )
}

