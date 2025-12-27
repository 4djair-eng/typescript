import { describe, it, expect } from 'vitest';
import {sum} from './sum';

describe('sum', () => {
    it('soma de dois numeros',()=>{
        const resultado = sum(2,8);
        expect(resultado).toBe(10);
    });

});