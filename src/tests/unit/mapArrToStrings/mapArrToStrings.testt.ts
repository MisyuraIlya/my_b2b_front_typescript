import {mapArrToStrings} from './mapArrToStrings';

describe('mapArrToStrings', () => {
    test('mapArrToStrings value', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('mapArrToStrings value', () => {
        expect(mapArrToStrings([1, 2, 3, null, 'asdasf'])).toEqual(['1', '2', '3']);
    })
    test('mapArrToStrings value', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('mapArrToStrings value', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    })
})
