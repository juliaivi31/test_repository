const validator = {
  login: "",
  password: "",
  registration: function (login: string, password: string) {
    this.login = login;
    this.password = password;
  },
  validation: function (login: string, password: string) {
    if (login === this.login && password === this.password) {
      console.log("Добро пожалоВать");
    } else {
      console.log("Неверные данные");
    }
  },
};
validator.registration("name", "secret");
validator.validation("name", "neSecret");
