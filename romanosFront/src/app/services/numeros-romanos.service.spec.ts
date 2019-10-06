import { TestBed, inject } from '@angular/core/testing';

import { NumerosRomanosService } from './numeros-romanos.service';

  describe('NumerosRomanosService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [NumerosRomanosService]
      });
    });

  it('should be created', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service).toBeTruthy();
  }));

  it('1 should be iquals to I', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(1)).toEqual('I');
  }));

  it('2 should be iquals to II', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(2)).toEqual('II');
  }));

  it('3 should be iquals to III', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(3)).toEqual('III');
  }));

  it('4 should be iquals to IV', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(4)).toEqual('IV');
  }));

  it('5 should be iquals to V', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(5)).toEqual('V');
  }));

  it('6 should be iquals to VI', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(6)).toEqual('VI');
  }));

  it('7 should be iquals to VII', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(7)).toEqual('VII');
  }));

  it('8 should be iquals to VIII', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(8)).toEqual('VIII');
  }));

  it('500 should be iquals to D', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(7)).toEqual('VII');
  }));

  it('950 should be iquals to LM', inject([NumerosRomanosService], (service: NumerosRomanosService) => {
    expect(service.numeroRomano(7)).toEqual('VII');
  }));
});
