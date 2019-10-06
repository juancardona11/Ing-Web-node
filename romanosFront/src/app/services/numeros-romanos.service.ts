import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumerosRomanosService {
  unidades:string[];
  decenas:string[];
  centenas:string[];
  n: number;
  aux: string;
  particion: number;
  //resultado: string;

  constructor() { }

  numeroRomano(numero: number):string{
  var resultado:string;
  var unidades = ["I","II","III","IV","V","VI","VII","VIII","IX"];
  var decenas = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var centenas = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  // if(numero == 1){
  //   resultado = unidades[0];
  //   return resultado;
  // }
  if (numero.toString.length == 1){
    var n = numero.toString().charAt(0);
    var z: number = parseInt(n);
    resultado = unidades[z-1];
    return resultado;
  }
    else
      if (numero.toString.length == 2){
      resultado = decenas[numero[0]-1];
      resultado.concat(unidades[numero[1]-1]);
      return resultado;
      }
        else{
          resultado = centenas[numero[0]-1];
          resultado.concat(decenas[numero[1]-1]);
          resultado.concat(unidades[numero[2]-1]);
          return resultado;
        }   
  }
}
