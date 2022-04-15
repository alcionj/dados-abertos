async function load(){
	 const queryString = window.location.search;
	 const urlParams = new URLSearchParams(queryString);
	 const id = urlParams.get('id');
	 let endpoint = 'https://dadosabertos.camara.leg.br/api/v2/deputados/'+ id +'/despesas?ordem=desc&ordenarPor=ano';
	 let data = [];
	  while (endpoint) {
		const response = await fetch(endpoint);
		if (!response.ok) {
		  throw new Error("Request failed");
		}
		const page = await response.json();
		data = data.concat(page.dados);
		try {
			    if(page.links[1].rel == 'next'){ 
					endpoint = page.links[1].href;
				}else{
					break;
				}
			} catch (e) {
			  break;
			}
	  }
	setDataToTable(data);
 }
 function setDataToTable(jsonData){
	$('#deputados').DataTable( {
    pagination: "bootstrap",
    filter:true,
	scrollX: true,
    data: jsonData,
    destroy: true,
    lengthMenu:[5,10,25],
    pageLength: 10,
	                "language": {
                    "lengthMenu": "Visualizando _MENU_ Registros por página",
                    "zeroRecords": "Não existe registros para visualização",
					"search":"Busca",
                    "info": "Mostrando página _PAGE_ de _PAGES_",
                    "infoEmpty": "Não há registros disponíveis",
                    "infoFiltered": "(filtrado de _MAX_ registros totais)",
                    "paginate": {
                        "previous": "Página Anterior",
                        "next": "Próxima página"
                    }
                },
    "columns":[  
                {     "data"     :     "ano"     },  
                {     "data"     :     "cnpjCpfFornecedor"},    
                {     "data"     :     "dataDocumento"},
                {     "data"     :     "nomeFornecedor"},
                {     "data"     :     "urlDocumento"},
                {     "data"     :     "valorDocumento"},	
                {     "data"     :     "valorLiquido"}			
           ],
	columnDefs: [{
		  targets: [4], "render": function (data, type, row, meta) {return '<a href="' + data + '" target="_blank"> link </a>';}
          }]
  } );
}