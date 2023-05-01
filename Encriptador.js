

var frase = "hola mundo?";
console.log (frase);
var arry = frase.split("");

function tieneAcentos(texto) {
    const regex = /[áéíóú]/i;
    return regex.test(texto);
  }

function tieneCaracteresEspeciales(texto) {
    const caracteresPermitidos = /^[A-Za-z0-9\s]+$/;
    const textoNormalizado = texto.normalize("NFD").replace(/\p{M}/ug, "");
    return !caracteresPermitidos.test(textoNormalizado);
  }

function codificar (){
if (tieneCaracteresEspeciales(frase) == true || tieneAcentos(frase) == true) return "";
for (let i = 0; i < arry.length; i++){
    switch (arry[i]) {
      
        case "e":
            arry[i] = "enter"
            break;
        
        case "i":
            arry[i] = "imes"
            break;
        
        case "a":
            arry[i] = "ai"
            break;
        
        case "o":
            arry[i] = "ober"
            break;
            
        case "u":
            arry[i] = "ufat"
            break;

            
    }}
    if (frase === arry.join("")) return "";  
    return arry.join(""); 
}
var retorno = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober";

var retornoArry = retorno.split("")

function decodificar (){
    let fraseRetorno = []; 
    if (tieneCaracteresEspeciales(retorno) == true || tieneAcentos(retorno) == true) return "";
    for (let i = 0; i < retornoArry.length; i++){
        switch (retornoArry[i]) {
          
            case "e":
                fraseRetorno.push(retornoArry[i]);
                i += 4;
                break;
            
            case "i":
            fraseRetorno.push(retornoArry[i]);
            i += 3;
            break;
            
            case "a":
            fraseRetorno.push(retornoArry[i]);
            i += 1;
            break;
            
            case "o":
            fraseRetorno.push(retornoArry[i]);
            i += 3;    
            break;
                
            case "u":
            fraseRetorno.push(retornoArry[i]);
            i += 3;
            break;
            
            default:
                fraseRetorno.push(retornoArry[i]);
                break;
        }}
        if (retorno == fraseRetorno.join("")) return "";  
        return fraseRetorno.join(""); }

var decodifing = decodificar();
console.log(decodifing);