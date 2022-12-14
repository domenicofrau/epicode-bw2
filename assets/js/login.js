function login(that) {
    let nome = that.username.value
    window.localStorage.setItem("nome", nome)
    window.location.assign("index.html");;
}