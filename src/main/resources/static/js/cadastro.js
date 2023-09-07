    function campoVazio(campo){
		if(campo == ''){
			return true;
		}else{
			return false;
		}
	}

	function validaEnvio(){
		let podeEnviar = true;
		let cpf = $("#cpf").val();
		let nome = $("#nome").val();
		let email = $("#email").val();
		let telefone = $("#telefone").val();
		let senha = $("#senha").val();
		let confSenha = $("#confSenha").val();

		$("#errorMessage").text("");
		if(!validarCPF(cpf)){
			podeEnviar = false;
			$("#errorMessage").append('CPF Inválido!');
		}
		if(campoVazio(nome)){
			podeEnviar = false;
			$("#errorMessage").append('O nome precisa ser preenchido!');
		}
		if(campoVazio(email) && campoVazio(telefone)){
			podeEnviar = false;
			$("#errorMessage").append('O e-Mail ou telefone precisa ser preenchido!');
		}
		if(campoVazio(senha) || senha != confSenha){
			podeEnviar = false;
			$("#errorMessage").append('A senha precisa ser preenchida e igual a confirmação de senha!');
		}
		if(podeEnviar){
			$.ajax({
			    type: "POST",// Tipo da requisição
			    url: "/cadastro", // Caminho para envio da requisição
			    data: {
			        nome:nome,
			        cpf:cpf,
					telefone:telefone,
					email:email,
					senha:senha,
					confSenha:confSenha,
			    },
			    success: function (data) {
			        if(data.status == false){
			            alert(data.mensagem);
			        }else{
			            alert("Deu Bom!");
			        }
			    },
			    error: function () {
			        alert("Falha na comunicação com o servidor");
			    }
			});
		}
	}