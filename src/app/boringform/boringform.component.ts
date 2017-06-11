import { Component, OnInit } from '@angular/core';

import { Maestro, MaestroConTag, Transferencia, TransferenciaModel } from './datos';
import { DatosFormService } from './datos-form.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'boringform',
  templateUrl: './boringform.component.html',
  styleUrls: ['./boringform.component.scss']
})
export class BoringformComponent implements OnInit {

  tipos: Maestro[];
  transferencia: any;
  categorias: MaestroConTag[] = [];

  transferencias$: Observable<TransferenciaModel[]>;
  misTransferencias: Transferencia[];

  // componente stateful (trabaja con los datos)
  constructor( private datosFormService: DatosFormService) { }

  ngOnInit() {
    this.tipos = this.datosFormService.tipos;
    this.transferencias$ = this.datosFormService.getTransferencias$();
    this.transferencias$.subscribe((datos) => this.misTransferencias = datos);
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.transferencia = this.datosFormService.getNuevaTransferencia();
    this.categorias = this.datosFormService.getCategoriasPorTipo(this.transferencia.tipo);
  }

  cambiarTipoDeTransferencia(e: number){
    this.categorias = this.datosFormService.getCategoriasPorTipo(e);
    this.transferencia.categoria = this.datosFormService.getCategoriaBase(e);
  }

  guardarTransferencia(transferencia: Transferencia){
    console.log(`Guardo: ${JSON.stringify(transferencia)}`);
    this.datosFormService.postTransferencias(transferencia);
    this.iniciarFormulario();
  }
}
