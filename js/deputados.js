async function load(){
 const response  = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome')
 const data = await response.json()

 let output = '<div class="row justify-content-md-center">'
 for(let i in data.dados){
 
 output += 	'<div  id="'+ i +'" style="padding-bottom:15px; padding-top:10px;" class="card  col-lg-2 col-2 shadow-sm " data-string="'+ data.dados[i].nome + data.dados[i].siglaPartido + data.dados[i].siglaUf +'">' +
            '<span class="badge bg-success">' + data.dados[i].siglaPartido +' / ' + data.dados[i].siglaUf + '</span>' + 
		      	'<img class="w-100 hover-shadow" src="'+ data.dados[i].urlFoto +'" alt="Card image cap" style="width: 110%;">' +
			    	'<div class="">' +
			  		'<b>' + data.dados[i].nome + '</b><br>' +
			  		'<a href="detalhes_deputados.html?id='+ data.dados[i].id +'" target="_blank" class="btn btn-secondary btn-sm btn-block">Detalhes</a>' +
            '<a href="despesas_deputados.html?id='+ data.dados[i].id +'" target="_blank" class="btn btn-secondary btn-sm btn-block">Despesas</a>' +   
			    	'</div>' +
			'</div>'
 }
 output +='</div>'
document.querySelector('main').innerHTML = output;
}