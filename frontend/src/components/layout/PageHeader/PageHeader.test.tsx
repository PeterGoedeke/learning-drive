import { render, screen } from '@testing-library/react';

import PageHeader from '.';

import { composeTestingWrapper } from '../../../utils/testingUtils';

describe('PageHeader', () => {
  it('renders without error', async () => {
    const view = render(<PageHeader title='Global Feed' />, { wrapper: composeTestingWrapper() });

    expect(view.asFragment()).toMatchSnapshot();
  });

  it('renders the correct title', async () => {
    render(<PageHeader title='Global Feed' />, { wrapper: composeTestingWrapper() });

    expect(screen.getByText('Global Feed')).toBeInTheDocument();
  });

  it('renders a back button when specified', async () => {
    const view = render(<PageHeader title='Global Feed' backButton />, {
      wrapper: composeTestingWrapper(),
    });

    expect(screen.getByTestId('back-button')).toBeInTheDocument();

    expect(view.asFragment()).toMatchSnapshot();
  });

  it('renders the action passed', async () => {
    const action = <button data-testid='action'>Action</button>;
    const view = render(<PageHeader title='Global Feed' action={action} />, {
      wrapper: composeTestingWrapper(),
    });

    expect(screen.getByTestId('action')).toBeInTheDocument();

    expect(view.asFragment()).toMatchSnapshot();
  });
});
