import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina ={};
  cargada = false;
  equipo: any [] = [];



  constructor(private http: HttpClient) {

    //console.log('servicio de infoPagina listo')


    //leer el archivo JSON y tomar sus propiedades para que
    //puedan ser utilizadas en la pagina.

   this.cargarInfo();
   this.cargarEquipo();
   

   }
   private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: infoPagina) => {
        this.cargada = true;
        this.info = resp;
        
      
      }); 

   }

   private cargarEquipo() {

    // Leer el archivo JSON
      this.http.get('https://angular-html-53673-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: any) => {

        this.equipo = resp;
        // console.log(resp);
      });


    // this.equipo = resp
  }
}
