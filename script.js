const botoescurtir =document.queryselectorAll(".curtir");
     botoescurtir. forEach(function(botaoCutir){
     let curtiu =false;
      botaoCurtir.addEventlistener("click", curtir);
      function curtir(){
 const contador =botaoCurtir.queryselector("span");
 if(curtiu === false){
  contador. textcontent++;
 curtiu = true;}
     else{
     contador.textcontent--;
     curtiu = false; 
     }
}
}

