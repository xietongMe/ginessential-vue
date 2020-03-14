const telephoneValidate = (value) => /^1[3|4|5|6|7|8]\d{9}$/.test(value);

export default {
  telephoneValidate,
};
