const formulario = document.getElementById('form-cadastro');

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let nome = formulario.nome.value;
    let username = formulario.username.value;
    let imagemAvatar = formulario.imagemAvatar.value;
    let senha = formulario.senha.value;
    // console.log(nome, username, imagemAvatar, senha);
    
const user = {
    "name": nome,
    "username": username,
    "avatar_url": imagemAvatar,
    "password": senha
}

async function postJSON(user) {
    try {
      const response = await fetch("http://192.168.89.186:8087/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  


    postJSON(user);
});