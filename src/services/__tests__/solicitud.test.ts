import { postSolicitud } from '../solicitud';
import fetch, { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

describe('postSolicitud', () => {
    it('should return data when response is ok', async () => {
        fetch.mockResponseOnce(JSON.stringify({ data: 'test' }));

        const result = await postSolicitud('testPlate');
        expect(result).toEqual({ data: 'test' });
    });

    it('should throw error when response is not ok', async () => {
        fetch.mockRejectOnce(new Error('Network response was not ok'));

        await expect(postSolicitud('testPlate')).rejects.toThrow('Network response was not ok');
    });
});