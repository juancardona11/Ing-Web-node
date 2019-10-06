import { Component, OnInit } from '@angular/core';
import {NumerosRomanosService } from '../../services/numeros-romanos.service';
@Component({
  selector: 'app-numeros-romanos',
  templateUrl: './numeros-romanos.component.html',
  styleUrls: ['./numeros-romanos.component.css']
})
export class NumerosRomanosComponent implements OnInit {
  resultado: any;
  valor: any;
  constructor(private service: NumerosRomanosService) { }
  
  ngOnInit() {
  }

  convertir(){
    this.resultado = this.service.numeroRomano(this.valor);

  }

}
