import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

jest.mock('next/router', () => require('next-router-mock'));

 
describe('Home page', () => {
//ir or test
  it('renders a heading', () => {
    render(<Home name="Margarita Villaseñor"/>);
 
    const heading = screen.getByRole('heading', {
      name: "Margarita Villaseñor",
    });
 
    expect(heading).toBeInTheDocument();
  });

  it('renders a description with portfolio owner summary', () => {
    render(<Home summary="My summary"/>);
 
    const summary = screen.getByText("My summary");
 
    expect(summary).toBeInTheDocument();
  });

  //it should render a name when something happend
});