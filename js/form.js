const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    email: null,
    tel: null
    nationality: null
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.email) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Требуется указать имя.');
      }
      if (!this.email) {
        this.errors.push('Требуется указать e-mail.');
      }

      e.preventDefault();
    }
  }
})