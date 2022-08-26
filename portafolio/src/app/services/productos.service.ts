import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';




@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [] ;
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) { 

    this.cargarProductos();
  }



  private cargarProductos(){

    return new Promise((resolve, reject)=>{
      this.http.get ('https://angular-html-53673-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any)=>{
        this.productos = resp;
        this.cargando = false; 
        resolve;
      });
    })
    
      
  }

  getProducto(id: string){
     return this.http.get(`https://angular-html-53673-default-rtdb.firebaseio.com/productos/${id}.json`);

  }

  buscarProducto(termino: string){
    if(this.productos.length === 0){
      //cargar productos
      this.cargarProductos().then(()=>{
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    }else{
      //aplicar filtro
      this.filtrarProductos(termino);
    }



   
  }

  private filtrarProductos(termino: string){
    //console.log(this.productos);
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod =>{

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino) >=0 || tituloLower.indexOf(termino) >= 0 ){
        this.productosFiltrado.push(prod);
      }

    });

  }

}
