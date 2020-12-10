export default class App {
    factorial(numero){
        let suma = 1;
        for(let i = 2; i <= numero; i++){
            suma = suma * i;
        }
        return suma;
    }
    convertirAString(numero){
        let i = 1;
        let suma = "";
        while(i <= numero){
            suma = suma + "*";

            i++;
        }
        return suma;
    }
    obtenerDivisibles(numero){
        let i = 1;
        let divisible = 0;
        do{
            if( numero % i == 0){
                divisible = divisible + 1;
            }else{

            }
            i++;
        }while(i <= numero);
        return divisible;
    }
    
}

let app = new App();
console.log(app.factorial(10));
console.log(app.convertirAString(5));
console.log(app.obtenerDivisibles(6));

