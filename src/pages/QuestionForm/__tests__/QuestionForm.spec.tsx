import { render, screen } from '@testing-library/react';
import { QuestionForm } from '../../../pages/QuestionForm';

describe('#QuestionForm', () => {
  it('should render withou error', () => {
    const { getByText } = render(<QuestionForm />);

    let obligateText = getByText(/obrigatório/i);
    obligateText = screen.getByText(/obrigatório/i);

    expect(obligateText).toBeInTheDocument();
  });
});
