import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any ={};
  cargada = false;

  constructor(private http: HttpClient) {

    //console.log('servicio de infoPagina listo')


    //leer el archivo JSON y tomar sus propiedades para que
    //puedan ser utilizadas en la pagina.

   

    this.http.get('assets/data/data-pagina.json')
      .subscribe(resp => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });



     
   }
}
