import { formatearFecha, formatearFechaResume, extraerHora, extraerFecha, parsearFecha } from '../dates';

describe('Pruebas para dates.ts', () => {
    test('formatearFecha', () => {
        const fecha = '2022/03/01';
        const resultado = formatearFecha(fecha);
        expect(resultado).toBe('01/03/2022');
    });

    test('formatearFechaResume', () => {
        const fecha = '2022/03/01';
        const resultado = formatearFechaResume(fecha);
        expect(resultado).toBe('MARZO 1, 2022');
    });

    test('extraerHora', () => {
        const fecha = '2022-03-01T12:30:00';
        const resultado = extraerHora(fecha);
        // Asume que extraerHora devuelve la hora en formato HH:mm
        expect(resultado).toBe('12:30:00');
    });

    test('extraerFecha', () => {
        const fecha = '2022-03-01T12:30:00';
        const resultado = extraerFecha(fecha);
        expect(resultado).toBe('01/03/2022');
    });

    test('extraerFecha con cadena vacía', () => {
        const fecha = '';
        const resultado = extraerFecha(fecha);
        expect(resultado).toBe('');
    });

    test('parsearFecha', () => {
        const fecha = '01/03/2022';
        const resultado = parsearFecha(fecha);
        expect(resultado).toBe('Marzo 1, 2022');
    });

    test('parsearFecha con cadena vacía', () => {
        const fecha = '';
        const resultado = parsearFecha(fecha);
        expect(resultado).toBe('');
    });
});