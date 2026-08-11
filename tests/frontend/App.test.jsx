import { render, screen } from '@testing-library/react';
import App from '../../frontend/src/App';
test('renders the executive dashboard', () => { render(<App/>); expect(screen.getByText('Executive overview')).toBeInTheDocument(); expect(screen.getByText('Revenue performance')).toBeInTheDocument(); });

