import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders Header component', () => {
    render(<Header />);

    const logoElement = screen.getByAltText('logo-pacifico');
    expect(logoElement).toBeInTheDocument();

    const soatElement = screen.getByText('SOAT');
    expect(soatElement).toBeInTheDocument();
});