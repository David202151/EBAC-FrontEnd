import { sumArray, countWords, findMax, isDivisible } from "../js/functions";


describe('Funcion que suma todos los elementos de un arreglo', () => {
  it('Suma de numeros positivos', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = sumArray(numbers);
    expect(result).toBe(15);
  });
  it('Suma de numeros negativos', () => {
    const numbers = [-1, -2, -3, -4, -5];
    const result = sumArray(numbers);
    expect(result).toBe(-15);
  });
  it('Arreglo vacio', () => {
    const numbers = [];
    const result = sumArray(numbers);
    expect(result).toBe(0);
  });
  it('Arreglo con arreglo que incluya 0', () => {
    const numbers = [0, 1, 2, 3];
    const result = sumArray(numbers);
    expect(result).toBe(6);
  });
});


describe('Funcion que cuenta cuantas palabras hay en una cadena de texto', () => {
  it('cadena de texto normal', () => {
    const text = 'Hola mundo';
    const result = countWords(text);
    expect(result).toBe(2);
  });
  it('cadena con espacios al inicio y final', () => {
    const text = '   Hola mundo   ';
    const result = countWords(text);
    expect(result).toBe(2);
  });
  it('cadena vacia', () => {
    const text = '';
    const result = countWords(text);
    expect(result).toBe(0);
  });
  it('cadena espacios consecutivos entre palabras', () => {
    const text = '   Hola   mundo  soy   un  test   ';
    const result = countWords(text);
    expect(result).toBe(5);
  });
});

describe('Funcion que devuelve el numero mas grande en un arreglo', () => {
    it('arreglo de numeros positivos', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = findMax(numbers);
        expect(result).toBe(5);
    });
    it('arreglo de numeros negativos', () => {
        const numbers = [-1, -2, -3, -4, -5];
        const result = findMax(numbers);
        expect(result).toBe(-1);
    });
    it('arreglo vacio', () => {
        const numbers = [];
        const result = findMax(numbers);
        expect(result).toBe(null);
    });
    it('arreglo con numeros iguales', () => {
        const numbers = [5, 5, 5, 5, 5];
        const result = findMax(numbers);
        expect(result).toBe(5);
    });
}); 

describe('Funcion que verifica si un numero es divisible entre otro', () => {
    it('numero divisible', () => {
        const num = 10;
        const divisor = 2;
        const result = isDivisible(num, divisor);
        expect(result).toBe(true);
    });
    it('numero no divisible', () => {
        const num = 10;
        const divisor = 3;
        const result = isDivisible(num, divisor);
        expect(result).toBe(false);
    });
    it('divisor es cero', () => {
        const num = 10;
        const divisor = 0;
        const result = isDivisible(num, divisor);
        expect(result).toBe('No se puede dividir entre cero');
    });
    it('numero negativo en la entrada', () => {
        const num = -10;
        const divisor = -2;
        const result = isDivisible(num, divisor);
        expect(result).toBe(true);
    });
});