import { Component, OnInit, Input } from '@angular/core';
import { TransferenciaModel } from './../datos';
@Component({
  selector: 'vista-resultado',
  templateUrl: './vista-resultado.component.html',
  styleUrls: ['./vista-resultado.component.scss']
})
export class VistaResultadoComponent implements OnInit {

@Input()
transferencias: TransferenciaModel[];
  constructor() { }

  ngOnInit() {
  }

}
