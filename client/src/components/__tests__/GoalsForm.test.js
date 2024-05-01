import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GoalsForm from './GoalsForm';

describe('GoalsForm', () => {
  it('calls setGoals with correct data when form is submitted', () => {
    const setGoalsMock = jest.fn();
    const { getByLabelText, getByText } = render(<GoalsForm setGoals={setGoalsMock} />);

    fireEvent.change(getByLabelText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(getByLabelText('Notation'), { target: { value: 'Test Notation' } });

    fireEvent.click(getByText('Create'));

    expect(setGoalsMock).toHaveBeenCalledWith([{ title: 'Test Title', notation: 'Test Notation' }]);
  });

});
