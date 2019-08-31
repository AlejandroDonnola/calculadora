 alert ("en esto lo habia dejado despues pasame tu comentario y que harias");
function off () {
document.getElementById('pantalla').disabled= 'disabled';
}
function on (){
    document.getElementById('pantalla').disabled =document.getElementById('pantalla').value=0;
}

class Calculadora{
    constructor(){
        this.memoria=0;
    }
    calcular(){
        try{
        var str = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = eval(str);
        }catch(err){ 
        document.getElementById('pantalla').value = "ERROR";
        }
    }
         pintarValor(numero){
        var anterior = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = anterior.concat(numero);
    }
    limpiarPantalla(){
         document.getElementById('pantalla').value=null;
         }
    sumarMemoria(){
        this.numeroPantalla= parseInt(document.getElementById('pantalla').value);
        if(this.numeroPantalla>0 || this.numeroPantalla<0){
        this.memoria += this.numeroPantalla;
        console.log(this.memoria += this.numeroPantalla);
        }
    }

    limpiarMemoria(){
        console.log(this.numeroPantalla -this.numeroPantalla);
   }

  
      limpiarNumero(numero){
        var anterior = document.getElementById('pantalla').value;
        var number = anterior.substring(0,anterior.length-1);
        document.getElementById('pantalla').value = number;}
    
    }
    
    

class CalculadoraCientifica extends Calculadora {
    constructor(){
        super();
    }
    
    calcularPotenciaDos(){
        var anterior = parseInt(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = Math.pow(anterior,2);
    }
    
    calcularRaiz(){
        var anterior = parseInt(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = Math.sqrt(anterior);
    }
    
    
    calcularFactorial(){
        try{
        var total= 1;
        var anterior = parseInt(document.getElementById('pantalla').value);
        if(anterior>=0){
        for(var i=1 ; i<=anterior; i++){
            total= total*i;
        }
        document.getElementById('pantalla').value = total;
        }else
            throw new Error();
        }catch(Err){
            document.getElementById('pantalla').value = "ERROR";
        }
        
    }

}   
var calculadora = new CalculadoraCientifica();
