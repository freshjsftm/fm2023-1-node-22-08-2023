export const sum = (...args) => args.reduce((acc, arg) => acc + arg, 0);

export const pow = (base, exp) => base ** exp;

export const sub = (a, b) => a - b;

export const div = (a, b) => a / b;

const secretFunction = () => {
  console.log('secret');
};

export default 77;
