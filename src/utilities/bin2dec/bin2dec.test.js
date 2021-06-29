import { default as bin2dec } from '.';

test('O resultado deve ser um número decimal positivo.', () => {
    expect(bin2dec('10111')).toBe(23);
});

test('Pode e ser iniciado com o dígito 1.', () => {
    expect(bin2dec('1010abbb')).toBe(10);
});

test('Pode e ser iniciado com o dígito 0.', () => {
    expect(bin2dec('0010aaa')).toBe(2);
});

test('Valor do parametro iniciado com qualquer outro valor, retorna NaN.', () => {
    expect(bin2dec('231a0010aaa')).toBe(NaN);
});
