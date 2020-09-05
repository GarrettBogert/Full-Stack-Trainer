import * as Questions from '../StaticCards/Questions.js';
import Checkbox from '../Checkbox.js';
import React, { useState, useEffect } from 'react';

const CATEGORIES = ['csharp', 'html', 'css', 'sql'];

export default function FlashCardApp() {

    const getLocalStorageCategories = () => {
      const rawCategories = JSON.parse(localStorage.getItem('categories'));
      return rawCategories ?? [];
    };
  
    const saveLocalStorageCategories = (cats) => {
      localStorage.setItem('categories', JSON.stringify(cats));
    };
  
    const [answerVisible, setAnswerVisible] = useState(false);
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("Click 'next question' for question");
    const [categories, setCategories] = useState(CATEGORIES);
    const [userCategories, setUserCategories] = useState(getLocalStorageCategories())
    const [checkedCategories, setCheckedCategories] = useState([]);
    
    const [addCategoryText, setAddCategoryText] = useState();
    const [isAddingCategory, setIsAddingCategory] = useState(false);
  
    const handleToggleAnswerClick = () => {
      setAnswerVisible(!answerVisible);
    }
  
    const handleNextCardClick = (setQuestion, setAnswer) => {
      if (checkedCategories.length > 0) {
        let card = Questions.getRandom(checkedCategories);
        setQuestion(card.question);
        setAnswer(card.answer);
        setAnswerVisible(false);
      }
      else {
        window.alert("Please check at least one category in order to display next question.")
      }
    }
  
    const handleCheckboxChange = (event) => {
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
    }
  
    useEffect(() => {
      saveLocalStorageCategories(userCategories);
    }, [userCategories]);
  
    const handleConfirmCategory = () => {
      if ([...categories, ...userCategories].includes(addCategoryText)) {
        window.alert(`Category ${addCategoryText} already exists!`);
      }
      else {
        setUserCategories([...userCategories, addCategoryText]);
        setIsAddingCategory(!isAddingCategory);
      }
    }
  
    return (  
      <>
        <Card
          question={question}
          answer={answer}
          answerVisible={answerVisible}
          onClick={() => handleToggleAnswerClick()}
        />
        <NextQuestion
          onClick={() => handleNextCardClick(setQuestion, setAnswer)}
        />
        <div className='categoryContainer'>
          {categories.map(category => {
            return (<Checkbox
              label={category}
              isChecked={checkedCategories.includes(category)}
              onCheckboxChange={handleCheckboxChange}
              key={category}
            />)
          })}
          {userCategories.map(category => {
            return (<Checkbox
              label={category}
              isChecked={checkedCategories.includes(category)}
              onCheckboxChange={handleCheckboxChange}
              key={category}
            />)
          })}
        </div>
        <div className='addCategory'>
          <AddCategory
            handleConfirmCategory={handleConfirmCategory}
            handleAddCategoryNameChange={handleAddCategoryNameChange}
            handleNewCategoryClick={handleNewCategoryClick}
            isAddingCategory={isAddingCategory}
          />
        </div>
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
            </button></>
        }
      </>
    )
  }

  function NextQuestion(props) {
    return (
      <>
        <button
          className='greybutton'
          onClick={props.onClick}>
          Next question
        </button>
      </>
    )
  }

  function Card(props) {
    return (
      <>
        <div className='question'>{props.question}</div>
        <div className='answer'
          hidden={!props.answerVisible}>{props.answer}</div>
        <ToggleAnswer
          onClick={props.onClick}
          isVisible={props.answerVisible}
        />
      </>
    )
  }

  function ToggleAnswer(props) {
    return (
      <button className='greybutton'
        onClick={props.onClick}>
        {props.isVisible ? 'Hide answer' : 'Show answer'}
      </button>
    )
  }