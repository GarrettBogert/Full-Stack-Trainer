import React from 'react';
import './App.css';
import * as CSharp from './cSharpQuestions.js';




function ToggleAnswer(props){
return (
  <button
  onClick={props.onClick}>
    {props.isHidden? 'Show answer':'Hide answer'}
    </button>
)
}


function NextQuestion(props) {
  return (
    <div className='nextcard'>
      <button
      className='nextcardbutton'
        onClick={props.onClick}>
        Next question
      </button>
    </div>
  )
}

function Card(props) {
    return (
      <div>
        <div className='question'>{props.question}</div> 
        <div className='qaborder'></div>
        <div className='answer'
        hidden={props.answerHidden}>{props.answer}</div>
        <ToggleAnswer
        onClick={props.onClick}
        isHidden={props.answerHidden}
        />
      </div>
    )
  }

 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "Click 'next question' for question",
      answer: "",
      answerHidden:true
    };
  }

  handleToggleAnswerClick(){
    this.setState({
      answerHidden: !this.state.answerHidden
    })
  }

  render() {
    return (
      <div className="App">
        <header className="flashcard">
          {this.renderCard({ question: this.state.question, answer: this.state.answer, answerHidden: this.state.answerHidden })}         
        </header>
        <NextQuestion
          onClick={() => this.handleNextCard()}
        />       
      </div>
    )
  }

  handleNextCard() {
    let card = CSharp.getRandom();
    this.setState({
      question: card.question,
      answer: card.answer,
      answerHidden:true
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
