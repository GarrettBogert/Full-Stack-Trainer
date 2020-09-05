import React, { useState, useEffect } from 'react';
import './App.css';
import * as Questions from './StaticCards/Questions.js';
import Checkbox from './Checkbox.js';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToggleAnswer(props) {
  return (
    <button className='greybutton'
      onClick={props.onClick}>
      {props.isVisible ? 'Hide answer' : 'Show answer'}
    </button>
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

function AddCategory(props) {
  return (
    <>
      <img
        onClick={props.handleAddCategoryClick}
        alt="missing"
        width='12px'
        height='12px'
        src={props.isAddingCategory ? '/images/cancel.png' : '/images/add.png'}
        margin-right='3px' />
        {!props.isAddingCategory? <span>Add category</span> : <><input type='text'></input><div className='confirmCategory'>Confirm category</div></> }
        
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

const CATEGORIES = ['csharp', 'html', 'css', 'sql'];
const PAGES = ['Home', 'Flash cards', 'Multiple choice', 'Recruiter tracking'];

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES[0])
  return (
    <div className="App">
      {renderNavBar(setCurrentPage)}
      <div className="column left"></div>
      <div className="column center">
        {renderCurrentPage(currentPage)}
      </div>
      <div className="column right"></div>
    </div>
  )
}

const renderNavBar = (setCurrentPage) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Full Stack Trainer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setCurrentPage(PAGES[0])}>Home</Nav.Link>
          <NavDropdown title="Mini-apps" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setCurrentPage(PAGES[1])}>Flash cards</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setCurrentPage(PAGES[1])}>Multiple choice (coming soon) </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setCurrentPage(PAGES[1])}>Recruiter tracking (coming soon)</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

const renderCurrentPage = (currentPage) => {
  switch (currentPage) {
    case 'Flash cards':
      return (
        <FlashCardApp
        />
      );
    case 'Home':
      return Home();
    default:
      return Home();
  }
}

function FlashCardApp() {

  const [answerVisible, setAnswerVisible] = useState(false);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("Click 'next question' for question");
  const [categories] = useState(CATEGORIES);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [userCategories, setUserCategories] = useState([]);
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

  const handleAddCategoryClick = (event) => {
    setIsAddingCategory(!isAddingCategory);
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
handleAddCategoryClick={handleAddCategoryClick}
isAddingCategory={isAddingCategory}
/>
      </div>
    </>
  )
}

function Home() {
  return (
    <p>
      Welcome to Full Stack Trainer. This application is a series of 'mini-apps' that will help aid in your journey to broadening your programming skills in an ever-demanding job market.
    </p>

  )
}
export default App;
