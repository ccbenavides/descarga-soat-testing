
import { render, fireEvent } from '@testing-library/react';
import Landing from '../Landing';
import { ClienteProvider } from '../../context/CertificateContext';





const mutationFn = jest.fn();
jest.mock('@tanstack/react-query', () => ({
  useMutation: () => ({
    mutate: mutationFn,
  }),
}));

const mutate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mutate,
}));

describe('Landing Component', () => {
  test('renders Landing component', () => {
    const { getByText } = render(

      <ClienteProvider>
        <Landing />
      </ClienteProvider>
    );
    expect(getByText('Ingresa tu placa')).toBeInTheDocument();
  });

  test('handles form submission', () => {

    const { getByRole } = render(<ClienteProvider>

      <Landing />
    </ClienteProvider>);

    const form = getByRole('form');
    fireEvent.submit(form);

    const onSuccess = jest.fn();
    mutate("", { onSuccess });

    expect(mutate).toHaveBeenCalledWith("", { onSuccess });

    mutate.mock.calls[0][1].onSuccess();

    expect(onSuccess).toHaveBeenCalled();


  });
});