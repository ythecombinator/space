import React from 'react';
import { render } from 'test-utils';
import StylePage from '../pages/style';

describe('Style Page', () => {
  it('should render without crashing', () => {
    const { container } = render(<StylePage />);
    expect(container).toBeInTheDocument();
  });
});
