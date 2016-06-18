var todasAsImagens = ['img/event1.jpg',
        'img/event2.jpg',
        'img/event3.jpg',
        'img/event4.jpg'];
var botoes = document.getElementsByClassName('controle');
var img= document.getElementById('slide');
var j =0;
for(var i = 0 ; i < botoes.length ; i++){		
		botoes[i].addEventListener('click',function(e){
    if(e.currentTarget.id=='anterior'){
    	if(j==0){
    		j=todasAsImagens.length - 1;
				img.src= todasAsImagens[j] ;
      }
      else{
      	j--;
      	img.src=todasAsImagens[j] ;
      }
      }
   if(e.currentTarget.id=='proximo'){
   		if(j==(todasAsImagens.length - 1)){
      	j=0;
        img.src= todasAsImagens[j] ;
      }
      else{
      	j++;
        img.src= todasAsImagens[j];
      }
    }
  });
} 