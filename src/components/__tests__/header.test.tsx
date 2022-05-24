import React from 'react';
import { render } from 'test-utils';
import Header from '../Header';

describe('Header', () => {
  it('should render without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
