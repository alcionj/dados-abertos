async function load(){
	
 const response  = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome')
 const data = await response.json()

 let output = '<div class="row row-cols-2 row-cols-md-4 mb-6 text-center justify-content-md-center">'
 for(let i in data.dados){
            output += '<div class="col">' +
	        '<div  id="'+ i +'" class="card  mb-4 rounded-3 shadow-sm" data-string="'+ data.dados[i].nome + data.dados[i].siglaPartido + data.dados[i].siglaUf +'">' +
            '<div class="card-header py-3"><h8 class="my-0 fw-normal">' + data.dados[i].siglaPartido +' / ' + data.dados[i].siglaUf + '</h8></div>' + 
			    	'<div class="card-body">' +
					'<img class="w-100 hover-shadow" src="'+ data.dados[i].urlFoto +'">' +
			  		'<b>' + data.dados[i].nome + '</b><br>' +
			  		'<a href="detalhes_deputados.html?id='+ data.dados[i].id +'" target="_blank" class="w-100 btn btn-outline-secondary">Detalhes</a>' +
                    '<a href="despesas_deputados.html?id='+ data.dados[i].id +'" target="_blank" class="w-100 btn btn-outline-secondary">Despesas</a>' +   
			    	'</div>' +
			'</div>'+
			'</div>'
 }
 output +='</div>'
document.querySelector('main').innerHTML = output;
}