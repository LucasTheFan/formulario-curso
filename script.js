function check_form(){
    var nome = document.getElementById('nome').value;
    var tel = document.getElementById('telefone').value;
    var opGenero1 = document.getElementById('rGenero1').checked;
    var opGenero2 = document.getElementById('rGenero2').checked;
    var opGenero3 = document.getElementById('rGenero3').checked;
    var Mernsagem= document.getElementById('Mensagem').value;
    var TipodeContato= document.getElementById('TipodeContato').value;
        
    
    if(nome==''){
        alert("Preencha o nome");
        return false;
    
    }
    if(tel ==''){
        alert("Preencha o telefone");
        return false;
    
    }
    if((opGenero1==false)&&(opGenero2==false)&&(opGenero3==false)){
        alert("Preencha a opção de gênero");
        return false;
    }
    if(Mernsagem==''){
        alert("preeencha mensagem");
        return false;
    
    } 
    if(TipodeContato==''){
        alert("Escolha seu tipo de contato");
        return false;
    
    }
    return true;
}