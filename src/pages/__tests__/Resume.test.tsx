import { render, screen } from '@testing-library/react';
import { ContextCertificate } from '../../context/CertificateContext';
import Resume from '../Resume';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('<Resume />', () => {
    test('se renderiza sin estrellarse', () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <ContextCertificate.Provider value={{
                    certificateData: {
                        numeroPoliza: "879879824378273",
                        fechaEmision: "12:12:2020",
                        horaEmision: "20:20:10",
                        fechaInicioCovertura: "12/12/2020",
                        fechaFinCovertura: "12/12/2021",
                        vehiculoPlaca: "BOT158",
                        nombres: "CARLOS BENAVIDES",
                        vehiculoClaseDescripcion: "HIBRIDO",
                        vehiculoModeloNombre: "CERATO",
                        vehiculoMarcaNombre: "HYUNDAI",
                        precio: "200",
                        vehiculoUsoDescripcion: "PARTICULAR",
                        vehiculoVin: "55555555555"
                    },
                    setCertificateData: () => { }
                }}>
                    <Resume />
                </ContextCertificate.Provider>
            </QueryClientProvider>
        );
        expect(screen.getByRole('section')).toBeInTheDocument();
    });
});