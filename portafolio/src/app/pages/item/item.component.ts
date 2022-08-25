import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: any;
  id: any;

  constructor( private route: ActivatedRoute, 
               public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(parametros =>{
      console.log(parametros['id']);
      
      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: any)  =>{
        this.id=parametros['id'];
        this.producto =producto;
      });



    });
  }

}
