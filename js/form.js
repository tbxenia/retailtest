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
        this.errors.push('��������� ������� ���.');
      }
      if (!this.email) {
        this.errors.push('��������� ������� e-mail.');
      }

      e.preventDefault();
    }
  }
})