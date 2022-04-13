async function load(){

	 const queryString = window.location.search
	 const urlParams = new URLSearchParams(queryString)
	 const id = urlParams.get('id')
	 console.log(id)
		
	 const response  = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados/'+ id)
	 const data = await response.json()
	 console.log(data)
		
	 var dataNascimento = ''
	 var dataFalecimento = ''
	 var ultimoStatusData = ''
	 
	 if(data.dados.dataFalecimento != null){
	   dataFalecimento = new Date(data.dados.dataFalecimento).toLocaleDateString('pt-BR')
	 }
	 if(data.dados.dataNascimento != null){
	   dataNascimento = new Date(data.dados.dataNascimento).toLocaleDateString('pt-BR')
	 }
	 if(data.dados.ultimoStatus.data != null){
	   ultimoStatusData = new Date(data.dados.ultimoStatus.data).toLocaleDateString('pt-BR')
	 }
	 let output = ''
	     output += '<form class="row g-3">' +			   
						'<fieldset class="border p-2">' +
						   '<legend  class="float-none w-auto p-2">Dados Pessoais</legend>' +
							'<b>Nome civíl:   </b>'+ data.dados.nomeCivil +' <br>' +
							'<b>Data de Nascimento:   </b>'+ dataNascimento +' <br>' +
							'<b>Data de falecimento:   </b>'+ dataFalecimento +' <br>' +
							'<b>CPF:   </b>'+ data.dados.cpf +' <br>' +
							'<b>Escolaridade:   </b>'+ data.dados.escolaridade +' <br>' +
							'<b>Município de nascimento:   </b>'+ data.dados.municipioNascimento +' <br>' +
							'<b>Estado de nascimento:   </b>'+ data.dados.ufNascimento +' <br>' +
							'<b>Sexo:   </b>'+ data.dados.sexo +' <br>' +
						 '</fieldset>' +
						 '<fieldset class="border p-2">' +
						   '<legend  class="float-none w-auto p-2">Último Status</legend>' +
							'<b>Condição Eleitoral:   </b>'+ data.dados.ultimoStatus.condicaoEleitoral +' <br>' +
							'<b>E-mail:   </b>'+ data.dados.ultimoStatus.email +' <br>' +
							'<b>Data:   </b>'+ ultimoStatusData +' <br>' +
							'<b>Id Legislatura:   </b>'+ data.dados.ultimoStatus.idLegislatura +' <br>' +
							'<b>Nome:   </b>'+ data.dados.ultimoStatus.nome +' <br>' +
							'<b>Sigla Partido:   </b>'+ data.dados.ultimoStatus.siglaPartido +' <br>' +
							'<b>Sigla UF:   </b>'+ data.dados.ultimoStatus.siglaUf +' <br>' +
							'<b>Situação:   </b>'+ data.dados.ultimoStatus.situacao +' <br>' +
						 '</fieldset>' +
						  '<fieldset class="border p-2">' +
						   '<legend  class="float-none w-auto p-2">Gabinete</legend>' +
							'<b>Andar:   </b>'+ data.dados.ultimoStatus.gabinete.andar +' <br>' +
							'<b>E-mail:   </b>'+ data.dados.ultimoStatus.gabinete.email +' <br>' +
							'<b>Nome:   </b>'+ data.dados.ultimoStatus.gabinete.nome +' <br>' +
							'<b>Prédio:   </b>'+ data.dados.ultimoStatus.gabinete.predio +' <br>' +
							'<b>Sala:   </b>'+ data.dados.ultimoStatus.gabinete.sala +' <br>' +
							'<b>Telefone:   </b>'+ data.dados.ultimoStatus.gabinete.telefone +' <br>' +
						 '</fieldset>' +
				   '</form>' +
				   '<br>';
	 document.querySelector('main').innerHTML = output;
 }