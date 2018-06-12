const Utils = {
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  encode(str, mask) {
    let j = 0;
    let newstr = '';

    for (let i = 0; i < str.length; i++) {
      newstr += String.fromCharCode(str.charCodeAt(i) ^ mask.charCodeAt(j));
      j += 1;
      j %= mask.length;
    }

    return newstr;
  }
};

export default Utils;
