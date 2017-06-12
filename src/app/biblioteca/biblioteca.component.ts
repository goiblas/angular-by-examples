import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {
  storage: any;
  loading = true;
  libro: string;

  constructor(
    private activedRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes';
    this.api.getDataJson(url).subscribe(
      data => this.storage = data.items
    );

    console.log(this.storage);


    let parametros$: Observable<any> = this.activedRoute.params;
    parametros$.subscribe(parametros => {
      this.libro = parametros['libro'] || 'desconocido';
    });

    // this.pendingRequest = this.api.getData('https://www.googleapis.com/books/v1/volumes?q=' + this.model.searchQuery + '&maxResults=' + this.model.searchLimit + '&orderBy=' + this.model.sortOrder).

  }



}
