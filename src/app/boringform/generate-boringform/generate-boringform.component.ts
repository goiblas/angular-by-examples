import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatosFormService } from './../datos-form.service';

import { Maestro, MaestroConTag, Transferencia, TransferenciaModel } from './../datos';

@Component({
  selector: 'generate-boringform',
  templateUrl: './generate-boringform.component.html',
  styleUrls: ['./generate-boringform.component.scss']
})
export class GenerateBoringformComponent implements OnInit {

  @Input()
  tipos: Maestro[] = [];

  @Input()
  categorias: MaestroConTag[] = []

  @Input()
  transferencia: Transferencia;


  @Output()
  guardar: EventEmitter<Transferencia> = new EventEmitter<Transferencia>();

  @Output()
  actualizarTipo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  cambiarTipo(e: number){
    this.actualizarTipo.emit(e);
  }

  guardarTransferencia(){
    this.guardar.emit(this.transferencia);
  }
}
