import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {
  libro: string;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    let parametros$: Observable<any> = this.activedRoute.params;
    parametros$.subscribe(parametros => {
      this.libro = parametros['libro'] || 'desconocido';
    })
  }

}
