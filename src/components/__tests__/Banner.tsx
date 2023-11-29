import { render, screen } from '@testing-library/react';
import Banner from '../Banner';

test('renders Banner component', () => {
    render(<Banner />);
    expect(screen.getByText('Consulta y descarga tu SOAT Electrónico')).toBeInTheDocument();
    expect(screen.getByText('Recuerda que aquí podrás consultar tu SOAT Virtual de cualquier empresa de seguro como Interseguro, Rimac, La Positiva, Pacífico, Mapfre, Protecta y Crecer')).toBeInTheDocument();
});