import { Component, OnInit } from '@angular/core';
import { Entrega } from 'src/app/models/entrega';
import { EntregaService } from 'src/app/services/entrega.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  nombreEntrega = '';
  precio: any = null;

  constructor(
    private entregaService: EntregaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleClear(){
    this.nombreEntrega = ' ';
    this.precio = ' ';
  }

  createProduct(): void {
    console.log("hiciste click");
    const entrega = new Entrega(this.nombreEntrega, this.precio);
    this.entregaService.createEntrega(entrega).subscribe(
        data => {
          this.handleClear();
          
        },
        err => {
          
          //this.router.navigate(['/']);
        }
    );
  }

}
