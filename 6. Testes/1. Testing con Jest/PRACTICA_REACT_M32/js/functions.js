// Funcion que suma todos los elementos de un arreglo
export const sumArray = (numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

// Funcion que cuenta cuantas palabras hay en una cadena de texto
export const countWords = (text) => {
  if (!text || text.trim() === '') return 0;
  const words = text.split(' ');
  return words.filter(word => word !== '').length;
};

// Funcion que devuelve el numero mas grande en un arreglo
export const findMax = (numbers) => {
  if (numbers.length === 0) return null;
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) max = num;
  }
  return max;
};

// Funcion que verifica si un numero es divisible entre otro
export const isDivisible = (num, divisor) => {
  if (divisor === 0) return 'No se puede dividir entre cero';
  return num % divisor === 0;
};
