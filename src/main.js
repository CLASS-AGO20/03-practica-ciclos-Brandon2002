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
    
}

let app = new App();
console.log(app.factorial(10));
console.log(app.convertirAString(5));

