import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

it('renders learn react link', () => {
  const { queryByTestId } = render(<App/>);
  const home = queryByTestId('home');
  expect(home).toBeInTheDocument();
});

// it('can render flash cards mini-app', async() => {
//   const leftClick = { button: 0 }
//   const { getByTestId } = render(<App/>);
//   const miniApps = getByTestId('miniapps');
//   fireEvent.click(miniApps, leftClick);
//   await waitForElement(
//     () => getByTestId('flashcards')
//   );
//   const flashCardsLink = getByTestId('flashcards');
//   fireEvent.click(flashCardsLink, leftClick);
//   const addCard = getByTestId('addcard');
//   expect(addCard).toBeInTheDocument();
// });
