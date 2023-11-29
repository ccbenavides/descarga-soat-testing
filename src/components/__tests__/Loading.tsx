import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading Component', () => {
    test('renders Loading component', () => {
        render(<Loading />);
        const loadingElement = screen.getByRole('progressbar');
        expect(loadingElement).toBeInTheDocument();
    });
});