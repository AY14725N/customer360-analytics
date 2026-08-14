import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../frontend/src/App';

test('renders the executive dashboard', () => {
  window.history.pushState({}, '', '/dashboard');
  render(<App/>);
  expect(screen.getByText('Executive overview')).toBeInTheDocument();
  expect(screen.getByText('Revenue performance')).toBeInTheDocument();
});

test('navigates between routed pages', () => {
  window.history.pushState({}, '', '/dashboard');
  render(<App/>);
  fireEvent.click(screen.getByRole('link', { name: /customers/i }));
  expect(screen.getByText('Customer intelligence')).toBeInTheDocument();
  expect(window.location.pathname).toBe('/customers');
});

test('opens the CRM pipeline from sidebar navigation', () => {
  window.history.pushState({}, '', '/dashboard');
  render(<App/>);
  fireEvent.click(screen.getByRole('link', { name: /crm pipeline/i }));
  expect(screen.getByText('Customer data flow')).toBeInTheDocument();
  expect(screen.getByText('Connected sources')).toBeInTheDocument();
  expect(window.location.pathname).toBe('/crm-pipeline');
});
