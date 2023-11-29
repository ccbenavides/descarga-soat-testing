import { render } from '@testing-library/react';
import Modal from '../Modal';


describe('Modal Component', () => {
    document.body.innerHTML = '<div id="modal-root" />';
    const { baseElement } = render(<Modal mensaje="Este es un mensaje de prueba" />);
    test('renders Modal component', () => {
        expect(baseElement.firstChild).toBeInTheDocument();
    });
});