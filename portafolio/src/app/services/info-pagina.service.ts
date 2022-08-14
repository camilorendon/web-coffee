import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina ={};
  cargada = false;

  constructor(private http: HttpClient) {

    //console.log('servicio de infoPagina listo')


    //leer el archivo JSON y tomar sus propiedades para que
    //puedan ser utilizadas en la pagina.

   

    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: infoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });



     
   }
}
