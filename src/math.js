const sum = (...args) => args.reduce((acc, arg) => acc + arg, 0);

const pow = (base, exp) => base ** exp;

const sub = (a, b) => a - b;

const div = (a, b) => a / b;

const secretFunction = () => {
  console.log('secret');
};

export default { sum, pow, sub, div };
