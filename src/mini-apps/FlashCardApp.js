import * as Questions from '../StaticCards/Questions.js';
import React, { useState, useEffect } from 'react';
import Categories from '../Categories.js';
import Checkbox from '../Checkbox.js';

const CATEGORIES = ['csharp', 'html', 'css', 'sql'];

export default function FlashCardApp() {

    const getLocalStorageCategories = () => {
        const rawCategories = JSON.parse(localStorage.getItem('categories'));
        return rawCategories ?? [];
    };

    const saveLocalStorageCategories = (cats) => {
        localStorage.setItem('categories', JSON.stringify(cats));
    };

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
    const [categories, setCategories] = useState(CATEGORIES);
    const [userCategories, setUserCategories] = useState(getLocalStorageCategories())
    const [userCards, setUserCards] = useState(getLocalStorageCards())
    const [checkedCategories, setCheckedCategories] = useState([]);

    //Add Category state
    const [addCategoryText, setAddCategoryText] = useState('');
    const [isAddingCategory, setIsAddingCategory] = useState(false);

    //Add Card state
    const [addCardQuestionText, setAddCardQuestionText] = useState();
    const [addCardAnswerText, setAddCardAnswerText] = useState();
    const [isAddingCard, setIsAddingCard] = useState(false);
    const [addCardSelectedCategory, setAddCardSelectedCategory] = useState('Select a category');

    const handleToggleAnswerClick = () => {
        setAnswerVisible(!answerVisible);
    }

    const handleNextCardClick = (setQuestion, setAnswer) => {
        if (checkedCategories.length > 0) {
            let card = Questions.getRandom(checkedCategories, userCards);
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

    //Add Category crud
    const handleCategoryCheckboxChange = (event) => {
        const { name, checked } = event.target;
        if (checked) {
            setCheckedCategories([...checkedCategories, name]);
        } else {
            setCheckedCategories(checkedCategories.filter(category => category !== name));
        }
    };

    const handleAddCategoryNameChange = (event) => {
        setAddCategoryText(event.target.value);
    };

    const handleNewCategoryClick = () => {
        setIsAddingCategory(!isAddingCategory);
    };

    const handleNewCardClick = () => {
        setIsAddingCard(!isAddingCard);
    };

    useEffect(() => {
        saveLocalStorageCategories(userCategories);
    }, [userCategories]);

    useEffect(() => {
        saveLocalStorageCards(userCards);
    }, [userCards]);

    const handleConfirmCategory = () => {
        if (addCategoryText === '' || addCategoryText === null) {
            window.alert('Please enter a category name before saving.');
        }
        else if ([...categories, ...userCategories].includes(addCategoryText)) {
            window.alert(`Category '${addCategoryText}' already exists!`);
        }

        else {
            setUserCategories([...userCategories, addCategoryText]);
            setIsAddingCategory(!isAddingCategory);
        }
    };

    function deleteAllUserCategories() {
        setUserCategories([]);
    };

    //Add Card crud

    const handleAddCardQuestionChange = (event) => {
        setAddCardQuestionText(event.target.value);
    };

    const handleAddCardAnswerChange = (event) => {
        setAddCardAnswerText(event.target.value);
    };

    const handleAddCardCategoryChange = (event) => {
        setAddCardSelectedCategory(event.target.value);
    }

    const handleConfirmAddCard = (question, answer, category) =>{
        let card = {'question': question,
                    'answer':answer,
                    'category':category};
        setUserCards([...userCards, card ])
        setIsAddingCard(!isAddingCard);
    }

    function deleteAllUserFlashCards() {
        setUserCards([]);
    };

    const renderCardBody = () => {
        return (
            <>
                <Card
                    question={question}
                    answer={answer}
                    answerVisible={answerVisible}
                    onClick={() => handleToggleAnswerClick()}
                    onNextCardClick={() => handleNextCardClick(setQuestion, setAnswer)}
                />
                <Categories
                    categories={categories}
                    userCategories={userCategories}
                    checkedCategories={checkedCategories}
                    handleCheckboxChange={handleCategoryCheckboxChange}
                    handleConfirmCategory={handleConfirmCategory}
                    handleAddCategoryNameChange={handleAddCategoryNameChange}
                    handleNewCategoryClick={handleNewCategoryClick}
                    isAddingCategory={isAddingCategory}
                    addCategoryText={addCategoryText}
                />

            </>
        )
    };

    return (
        <>
            <div className="column left">
                <button onClick={deleteAllUserCategories}>Delete all custom categories</button>
                <button onClick={deleteAllUserFlashCards}>Delete all custom flash cards</button>
                <div className='addCustom'>
                    <AddCategory
                        handleConfirmCategory={handleConfirmCategory}
                        handleAddCategoryNameChange={handleAddCategoryNameChange}
                        handleNewCategoryClick={handleNewCategoryClick}
                        isAddingCategory={isAddingCategory}
                        addCategoryText={addCategoryText}
                    />
                    <AddCard
                        handleConfirmAddCard={handleConfirmAddCard}
                        handleAddCardQuestionChange={handleAddCardQuestionChange}
                        handleAddCardAnswerChange={handleAddCardAnswerChange}
                        handleNewCardClick={handleNewCardClick}
                        isAddingCard={isAddingCard}
                        addCardQuestionText={addCardQuestionText}
                        addCardAnswerText={addCardAnswerText}
                        userCategories={userCategories}
                        categories={categories}
                        handleSelectedCategoryChange={handleAddCardCategoryChange}
                        selectedCategory={addCardSelectedCategory}
                    />
                </div>
            </div>
            <div className="column center">
                {renderCardBody()}
            </div>
            <div className="column right">
                <div className='addCustom'>

                </div>
            </div>
        </>
    )
}

function Card(props) {
    return (
        <>
            <div className='question'>{props.question}</div>
            <div className='answer'
                hidden={!props.answerVisible}>{props.answer}</div>
            <button className='greybutton'
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
    return (
        <>
            <img
                onClick={props.handleNewCardClick}
                alt="missing"
                width='12px'
                height='12px'
                src={props.isAddingCard ? '/images/cancel.png' : '/images/add.png'}
                margin-right='3px' />
            {!props.isAddingCard ? <span>Add card</span>
                : <>
                <label>Question</label>
                    <input type='text' value={props.addCardQuestionText} onChange={props.handleAddCardQuestionChange}>
                    </input>
                    <label>Answer</label>
                    <input type='text' value={props.addCardAnswerText} onChange={props.handleAddCardAnswerChange}>
                    </input>
                    <select value={props.selectedCategory} onChange={props.handleSelectedCategoryChange}>
                        {props.categories.map(category => {
                            return (<option value={category}>{category}</option>)
                        })}
                        {props.userCategories.map(category => {
                            return (<option value={category}>{category}</option>)
                        })}
                    </select>

                    <button className='confirmCategory' 
                    onClick={() => 
                        {props.handleConfirmAddCard(props.addCardQuestionText,props.addCardAnswerText, props.selectedCategory)}}>Confirm card
            </button>
                </>
            }
        </>
    )
}

function AddCategory(props) {
    return (
        <>
            <img
                onClick={props.handleNewCategoryClick}
                alt="missing"
                width='12px'
                height='12px'
                src={props.isAddingCategory ? '/images/cancel.png' : '/images/add.png'}
                margin-right='3px' />
            {!props.isAddingCategory ? <span>Add category</span>
                : <>
                    <input type='text' value={props.addCategoryText} onChange={props.handleAddCategoryNameChange}>
                    </input>
                    <button className='confirmCategory' onClick={props.handleConfirmCategory}>Confirm category
            </button>
                </>
            }
        </>
    )
}