import React from 'react';
import { render, fireEvent, waitForElement, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';


it('renders learn react link', () => {
  const { queryByTestId } = render(<App/>);
  const home = queryByTestId('home');
  expect(home).toBeInTheDocument();
});

it('can render flash cards mini-app', async() => {
  const leftClick = { button: 0 }
  const { getByTestId } = render(<App/>);
  const appsDropdown = getByTestId('miniapps').firstChild;
  fireEvent.click(appsDropdown, leftClick);// Dirty hack. I need to understand my navbar more if I'm going to keep using it!
  await waitForElement(
    () => getByTestId('flashcards')
  );
  const flashCardsLink = getByTestId('flashcards');
  fireEvent.click(flashCardsLink, leftClick);
  const nextQuestion = screen.getByRole('button', {name: 'Next question'})
  expect(nextQuestion).toBeInTheDocument();
});

it(`can render multiple choice mini-app`, async()=>{
  const leftClick = { button: 0 }
  const { getByTestId } = render(<App/>);
  const appsDropdown = getByTestId('miniapps').firstChild;
  fireEvent.click(appsDropdown, leftClick);// Dirty hack. I need to understand my navbar more if I'm going to keep using it!
  await waitForElement(
    () => getByTestId('multiplechoice')
  );
  const flashCardsLink = getByTestId('multiplechoice');
  fireEvent.click(flashCardsLink, leftClick);
  const startQuiz = screen.getByRole('button', {name: 'Start Quiz'})
  expect(startQuiz).toBeInTheDocument();
})
