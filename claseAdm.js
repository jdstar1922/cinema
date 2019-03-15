class _usuario {
  constructor(_id, NOMBRE, CLAVE, EMAIL, IMAGEN, ESTADO, SALT) {
    this._id = _id;
    this.NOMBRE = NOMBRE;
    this.CLAVE = CLAVE;
    this.EMAIL = EMAIL;
    this.IMAGEN = IMAGEN;
    this.ESTADO = ESTADO;
    this.SALT = SALT;
  }
  Guardar() {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://bb-sita.herokuapp.com/api/nuevousuario");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Modificar() {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://bb-sita.herokuapp.com/api/modificausuario");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Eliminar() {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://bb-sita.herokuapp.com/api/eliminausuario");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Seleccionartodos() {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://bb-sita.herokuapp.com/api/seleccionausuario");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Seleccionarporid(req, res) {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://bb-sita.herokuapp.com/api/seleccionarporid");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Seleccionarpornombre(req, res) {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          "https://bb-sita.herokuapp.com/api/seleccionarpornombre"
        );
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Login(req, res) {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://bb-sita.herokuapp.com/api/login");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
}
