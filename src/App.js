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
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const PAGES = ['Home', 'Flash cards', 'Multiple choice'];
const CATEGORIES = ['csharp', 'html', 'css', 'MS SQL', 'javascript', 'Azure AZ-900'];

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
 

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, checkedCategories, theme) {
    return {
      fontWeight:
        checkedCategories.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  const theme = useTheme(); 

  function renderSelectableCategories(getCategories, checkedCategories, handleChangeCheckedCategories) {
    return (
      <>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">Categories</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={checkedCategories}
            onChange={handleChangeCheckedCategories}
            input={<Input id="select-multiple-chip" />}
            renderValue={() => (
              <div className={classes.chips}>
                {checkedCategories.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )
            }
            MenuProps={MenuProps}
          >
            {getCategories().map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, checkedCategories, theme)}>
                {name}
              </MenuItem>
            ))}           
          </Select>
        </FormControl>
      </>
    )
  }

  const handleCancelAddCategory = () => {
    setIsAddingCategory(false);
  }

  function addCategoryButton() {
    return (
      <>
        <Button
          size='small'
          variant='outlined'
          color='secondary'
          onClick={isAddingCategory ? handleCancelAddCategory : handleNewCategoryClick}
        >{isAddingCategory ? 'Cancel create category' : 'Create a category'}
        </Button>
        {isAddingCategory ?
          <>
            <form noValidate autoComplete="off">
              <TextField id="standard-basic" label="Category" value={addCategoryText} onChange={handleAddCategoryNameChange} />
            </form>
            <Button
              size='small'
              variant='contained'
              color='primary'
              onClick={handleConfirmCategory}>
              Confirm category
            </Button>
          </>
          : null
        }
      </>
    )
  }

  const renderCurrentPage = (currentPage) => {
    switch (currentPage) {

      case 'Flash cards':
        return (
          <FlashCardApp
            renderAddCategory={addCategoryButton}
            renderSelectableCategories={renderSelectableCategories}
            userCategories={userCategories}
            categories={categories}                               
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

  const clearAddCategoryForm = () => {
    setAddCategoryText('');
  }

  return (
    <div className="App">
      {renderNavBar(setCurrentPage)}     
      
        {renderCurrentPage(currentPage)}
      
    </div>
  )
}

const renderNavBar = (setCurrentPage) => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <img
      class='logo'
        src='../images/4.png'
        alt='nothing'       
        >
      </img>
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
    <>
      <img
        src='../images/1stpage.png'
        alt='nothing'
        height='400px'>
      </img>
      <p data-testid='home'>
        Welcome to Full Stack Trainer. This application is a series of 'mini-apps' that will help aid in your journey to broadening your programming skills in an ever-demanding job market.
    </p>
    </>
  )
}

export default App;
