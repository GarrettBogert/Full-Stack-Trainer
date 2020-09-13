import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MultipleChoiceApp from './mini-apps/MultipleChoiceApp.js';
import FlashCardApp from './mini-apps/FlashCardApp.js'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PAGES = ['Home', 'Flash cards', 'Multiple choice', 'Recruiter tracking'];
const CATEGORIES = ['csharp', 'html', 'css', 'sql', 'javascript', 'Azure AZ-900'];

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

  function renderSelectableCategories() {
    return (   
      <FormGroup
        className='selectCategoriesContainer'>
          <label>Select a category</label>
        {categories.map(category => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleCategoryCheckboxChange}
                  checked={checkedCategories.includes(category)}
                  name={category} />
              }
              label={category}
            />
          )
        })}
        {userCategories.map(category => {
          return (<FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryCheckboxChange}
                checked={checkedCategories.includes(category)}
                name={category} />
            }
            label={category}
          />)
        })}
        {addCategoryButton()}
      </FormGroup>    
    )
  }

  const handleCancelAddCategory = () => {
    setIsAddingCategory(false);
  }

  function addCategoryButton() {
    return (
      <>
        {!isAddingCategory ? <Button
          variant='contained'
          color='secondary'
          onClick={handleNewCategoryClick}
        >Add category</Button>
          : <>
            <form noValidate autoComplete="off">
              <TextField id="standard-basic" label="Category" value={addCategoryText} onChange={handleAddCategoryNameChange} />
            </form>
            <Button
              variant='contained'
              color='primary'
              onClick={handleConfirmCategory}>
              Confirm category
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleCancelAddCategory}>
              cancel
            </Button>
          </>
        }
      </>
    )
  }
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
            renderSelectableCategories={renderSelectableCategories}
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
            renderSelectableCategories={renderSelectableCategories}
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
        {currentPage === "Flash cards" || currentPage === "Multiple choice" ? renderSelectableCategories() : null}
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
          <NavDropdown data-testid='miniapps' title="Mini-apps" id="basic-nav-dropdown">
            <NavDropdown.Item data-testid='flashcards' onClick={() => setCurrentPage(PAGES[1])}>Flash cards</NavDropdown.Item>
            <NavDropdown.Item data-testid='multiplechoice' onClick={() => setCurrentPage(PAGES[2])}>Multiple choice</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function Home() {
  return (
    <p data-testid='home'>
      Welcome to Full Stack Trainer. This application is a series of 'mini-apps' that will help aid in your journey to broadening your programming skills in an ever-demanding job market.
    </p>
  )
}

function AddCategory(props) {
  return (
    <>

    </>
  )
}
export default App;
