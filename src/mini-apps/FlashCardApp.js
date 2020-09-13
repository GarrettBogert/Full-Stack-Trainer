import * as FlashCards from '../PrefabQuizzes/FlashCards.js';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

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
                renderSelectableCategories={props.renderSelectableCategories}
                question={question}
                answer={answer}
                answerVisible={answerVisible}
                onClick={() => handleToggleAnswerClick()}
                onNextCardClick={() => handleNextCardClick(setQuestion, setAnswer)}
            />
            <AddCard
                userCards={userCards}
                setUserCards={setUserCards}
                categories={props.categories}
                userCategories={props.userCategories} />
            {props.renderAddCategory()}
        </>
    )
}

function Card(props) {
    return (
        <>
            <div className='question'>
                <TextField
                    id="outlined-multiline-static"
                    label="Question"
                    multiline
                    value={props.question}
                    variant="outlined"
                />
            </div>
            {props.renderSelectableCategories()}
            <div className='answer'>
                <TextField
                    id="outlined-multiline-static"
                    label="Answer"
                    multiline
                    value={props.answer}
                    variant="outlined"
                    hidden={!props.answerVisible}
                />
            </div>
            <Button
                variant='contained'
                color='secondary'
                onClick={props.onClick}
            >
                {props.isVisible ? 'Hide answer' : 'Show answer'}
            </Button>
            <Button
                variant='contained'
                color='primary'
                onClick={props.onNextCardClick}>
                Next question
            </Button>
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
        <div className='addcard'>
            <Button
                size='small'
                variant='outlined'
                color='secondary'
                data-testid='addCard'
                onClick={handleNewCardClick}
            >{isAddingCard ? 'Cancel' : 'Add Card'}
            </Button>
            {!isAddingCard ? null
                : <div className='addcard'>
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Question" value={addCardQuestionText} onChange={handleAddCardQuestionChange} />
                        <TextField id="standard-basic" label="Answer" value={addCardAnswerText} onChange={handleAddCardAnswerChange} />
                    </form>

                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={addCardSelectedCategory}
                            onChange={handleAddCardCategoryChange}
                        >
                            {props.categories.map(category => {
                                return (
                                    <MenuItem value={category}>{category}</MenuItem>
                                )
                            })}
                            {props.userCategories.map(category => {
                                return (
                                    <MenuItem value={category}>{category}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>


                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => handleConfirmAddCard(addCardQuestionText, addCardAnswerText, addCardSelectedCategory)}>Confirm card
                </Button>
                </div>
            }
        </div>
    )
}

