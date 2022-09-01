import React, {useState} from 'react'
import './log.css'



function Log(){

  const [campos, setCampos] = useState({
    nome:'',
    email:'',
    mensagem:'',
    anexo:''
  });
  function handleInputChange(event){
    if(event.target.name === "anexo")
      campos[event.target.name] = event.target.files[0];
    else
      campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

    // const sendmail = (e) => {
    //   e.preventDefault();
    // }
    function handleFormSubmit(event){ 
      event.preventDefault(); 
      console.log(campos);
      document.getElementById("dataReciver").innerHTML = campos.mensagem + ' ' + campos.anexo;
    }

    return(
      <div className="container">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="E-mail de destino.." onChange={handleInputChange} required/>

        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." onChange={handleInputChange} />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea" onChange={handleInputChange}></textarea>

        <label htmlFor="anexo">Anexo</label>
        <input type="file" id="anexo" name="anexo" onChange={handleInputChange} />

        <input type="submit" value="Enviar" />
      </form>
      <p id="dataReciver" >test</p>
    </div>
  );
}

export default Log
