import React from 'react';
import './App.css';
import * as Questions from './StaticCards/Questions.js';
import Checkbox from './Checkbox.js';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToggleAnswer(props) {
  return (
    <button className='greybutton'
      onClick={props.onClick}>
      {props.isHidden ? 'Show answer' : 'Hide answer'}
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

function Card(props) {
  return (
    <>
      <div className='question'>{props.question}</div>
      <div className='answer'
        hidden={props.answerHidden}>{props.answer}</div>
      <ToggleAnswer
        onClick={props.onClick}
        isHidden={props.answerHidden}
      />
    </>
  )
}

const CATEGORIES = ['csharp', 'html', 'css', 'sql'];
const APPS = ['Flash cards', 'Multiple choice', 'Recruiter tracking'];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES.reduce(
        (options, option) => ({
          ...options,
          [option]: true
        }),
        {}
      ),
      question: "Click 'next question' for question",
      answer: "",
      answerHidden: true,
      currentPage: APPS[0]
    };
  }


  handleToggleAnswerClick() {
    this.setState({
      answerHidden: !this.state.answerHidden
    })
  }

  createCheckbox = (category) => (
    <Checkbox
      label={category}
      isSelected={this.state.categories[category]}
      onCheckboxChange={this.handleCheckboxChange}
      key={category}
    />
  );

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      categories: {
        ...prevState.categories,
        [name]: !prevState.categories[name]
      }
    }));
  };

  renderFlashCardApp() {

  }

  renderNavBar() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Full Stack Trainer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Mini-apps" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Flash cards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Multiple choice </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Recruiter tracking</NavDropdown.Item>
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
  render() {

    return (
      <div className="App">
        {this.renderNavBar()}
        <div className="column left"></div>
        <div className="column center">
       
          {this.renderCard({ question: this.state.question, answer: this.state.answer, answerHidden: this.state.answerHidden })}

          <NextQuestion
            onClick={() => this.handleNextCard()}
          />
          <div className='categories'>
            {this.createCheckbox('csharp')}
            {this.createCheckbox('html')}
            {this.createCheckbox('css')}
            {this.createCheckbox('sql')}
          </div>
        </div>
        <div className="column right"></div>
      </div>


    )
  }

  handleNextCard() {
    let enabledCategories = Object.entries(this.state.categories).filter(category => category[1] === true).map(category => category[0]);
    let card = Questions.getRandom(enabledCategories);
    this.setState({
      question: card.question,
      answer: card.answer,
      answerHidden: true
    })
  }

  renderCard(i) {
    return (
      <Card
        question={i.question}
        answer={i.answer}
        answerHidden={i.answerHidden}
        onClick={() => this.handleToggleAnswerClick()}
      />
    )
  }
}

export default App;
