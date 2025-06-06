function enviaFormulario(){
    let Nome = document.getElementById("nome").value
    let Email = document.getElementById("email").value
    let CPF = document.getElementById("cpf").value
    let Senha = document.getElementById("senha").value
    let Senharepetida = document.getElementById("senha-repetida").value

    if (Nome.length > 0){
        console.log("nome válido")
    }else{
        console.log("nome inválido")
    }

    const regex = /\S+@\S+\.com/ 
      if (regex.test(Email)){
  console.log("email válido")
      }

    else{
        console.log("email inválido")
    }

    if (CPF.length > 10 && CPF.length < 12 ){
        console.log ("cpf válido")

    } else {
        console.log ("cpf inválido")
    }

    const regex2 = /[A-Z0-9!@#$%]/
    if (regex2.test(Senha)){
        console.log("senha válida")
    }
    else {
        console.log("senha inválida")
    }

    if (Senharepetida === Senha){
        console.log ("senha digitada corretamente")
    } else{
        console.log("senha digitada incorretamente")
    }
}


//alert aparece na tela