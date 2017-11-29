module.exports = {
  append: function (text) {
    document.body.innerHTML += text;
  },

  clear: function () {
    document.body.innerHTML = '';
  }
};
