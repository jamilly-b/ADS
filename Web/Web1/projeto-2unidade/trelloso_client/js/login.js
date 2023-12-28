const formularioLogin = document.getElementById("form-login");
const data = new FormData(formularioLogin);

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    
    async function postJSON(data) {
        try {
          const response = await fetch("http://192.168.89.186:8087/api/v1/auth/token", {
            method: "POST",
            body: data,
          });
          if (!response.ok) {
            throw new Error("Algo deu errado. Tente novamente.");
          }
          const result = await response.json();

          console.log(result.access_token);
        }
        catch (error) {
            console.error("Error:", error);
        }
    }
    // fetch('http://localhost:8087/api/v1/tags/', {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Bearer ' + _token; //Usar o token recebido no login! 
    //     }
    // }).then((data) => { //Captura do then de response.json();
    // console.log(data); //Resultado esperado!
    // })
    // .catch((error) => {
    // console.log("Requisição falhou: ", error);
    // });
    

    postJSON(data);


});

// http://192.168.89.186:8087/api/v1/auth/token
// {
//     "access_token": "string",
//     "token_type": "string"
// }