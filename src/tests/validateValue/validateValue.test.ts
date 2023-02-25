import {validateValue} from './validateValue';

describe('validateValue', () => {
    test('validation value', () => {
        expect(validateValue(50)).toBe(true);
    })

    test('validation value', () => {
        expect(validateValue(-1)).toBe(false);
    })

    test('validation value', () => {
        expect(validateValue(101)).toBe(false);
    })

    test('validation value', () => {
        expect(validateValue(0)).toBe(true);
    })

    test('validation value', () => {
        expect(validateValue(100)).toBe(true);
    })
})
