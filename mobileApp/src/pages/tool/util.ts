import {
  FirstOption,
  Option,
} from './../../../node_modules/check-password-strength/index.d';
export const generatePassword = ({
  hasLowerCase,
  hasUpperCase,
  hasSymbol,
  hasDigit,
  length,
}) => {
  let charset = '';
  let newPassword = '';

  if (hasSymbol) charset += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  if (hasDigit) charset += '0123456789';
  if (hasLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (hasUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < parseInt(length); i++) {
    newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return newPassword;
};

export const strengthOptions: [
  FirstOption<string | undefined>,
  ...Option<string | undefined>[],
] = [
  {
    id: 0,
    value: 'average',
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: 'strong',
    minDiversity: 4,
    minLength: 8,
  },
  {
    id: 3,
    value: 'very_strong',
    minDiversity: 4,
    minLength: 10,
  },
];
