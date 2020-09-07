import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MultipleChoiceApp from './mini-apps/MultipleChoiceApp.js';
import FlashCardApp from './mini-apps/FlashCardApp.js'

const PAGES = ['Home', 'Flash cards', 'Multiple choice', 'Recruiter tracking'];
const CATEGORIES = ['csharp', 'html', 'css', 'sql', 'javascript'];

function App() {
  const getLocalStorageCategories = () => {
    const rawCategories = JSON.parse(localStorage.getItem('categories'));
    return rawCategories ?? [];
  };

  const saveLocalStorageCategories = (cats) => {
    localStorage.setItem('categories', JSON.stringify(cats));
  };

  const [currentPage, setCurrentPage] = useState(PAGES[0]);

  //Add Category state (user is able to add categories from any page).
  //Also, checkedcategories lives here because I want the same checked categories to persist from mini-app to mini-app, as a single user is likely to want that behavior.
  const [addCategoryText, setAddCategoryText] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [userCategories, setUserCategories] = useState(getLocalStorageCategories())
  const [categories, setCategories] = useState(CATEGORIES);
  const [checkedCategories, setCheckedCategories] = useState([]);


  const handleCategoryCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setCheckedCategories([...checkedCategories, name]);
    } else {
      setCheckedCategories(checkedCategories.filter(category => category !== name));
    }
  };


  const renderCurrentPage = (currentPage) => {
    switch (currentPage) {

      case 'Flash cards':
        return (
          <FlashCardApp
            userCategories={userCategories}
            categories={categories}
            checkedCategories={checkedCategories}
            setCheckedCategories={setCheckedCategories}
            handleCategoryCheckboxChange={handleCategoryCheckboxChange}
          />
        );

      case 'Home':
        return Home();

      case 'Multiple choice':
        return (
          <MultipleChoiceApp
            userCategories={userCategories}
            categories={categories}
            checkedCategories={checkedCategories}
            setCheckedCategories={setCheckedCategories}
            handleCategoryCheckboxChange={handleCategoryCheckboxChange}
          />
        )

      default:
        return Home();
    }
  }

  useEffect(() => {
    saveLocalStorageCategories(userCategories);
  }, [userCategories]);

  const handleAddCategoryNameChange = (event) => {
    setAddCategoryText(event.target.value);
  };

  const handleNewCategoryClick = () => {
    setIsAddingCategory(!isAddingCategory);
  };

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
      clearAddCategoryForm();
    }
  };

  function deleteAllUserCategories() {
    setUserCategories([]);
  };

  const clearAddCategoryForm = () => {
    setAddCategoryText('');
  }

  return (
    <div className="App">
      {renderNavBar(setCurrentPage)}
      <div className="column left">
        {currentPage !== 'Home' ?
          <><button onClick={deleteAllUserCategories}>Delete all custom categories</button>
            <div className='addCustom'>
              <AddCategory
                handleConfirmCategory={handleConfirmCategory}
                handleAddCategoryNameChange={handleAddCategoryNameChange}
                handleNewCategoryClick={handleNewCategoryClick}
                isAddingCategory={isAddingCategory}
                addCategoryText={addCategoryText}
              />
            </div>
          </>
          : null}

      </div>

      <div className="column center">
        {renderCurrentPage(currentPage)}
      </div>
      <div className="column right">
        <div className='addCustom'>

        </div>
      </div>

    </div>
  )
}

const renderNavBar = (setCurrentPage) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand onClick={() => setCurrentPage(PAGES[0])}>Full Stack Trainer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setCurrentPage(PAGES[0])}>Home</Nav.Link>
          <NavDropdown title="Mini-apps" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setCurrentPage(PAGES[1])}>Flash cards</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setCurrentPage(PAGES[2])}>Multiple choice</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setCurrentPage(PAGES[1])}>Recruiter tracking (coming soon)</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function Home() {
  return (
    <p>
      Welcome to Full Stack Trainer. This application is a series of 'mini-apps' that will help aid in your journey to broadening your programming skills in an ever-demanding job market.
    </p>
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
export default App;
