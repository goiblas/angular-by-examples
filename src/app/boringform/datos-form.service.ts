/*
* Extraemos lógica y la podemos utilizar en cualquiera de nuestros componentes
* RECORDAR: Añadir como providers en el módulo
**/
import { Injectable } from '@angular/core';
// obtengo los modelos de datos
import { Maestro, MaestroConTag, TransferenciaModel, Transferencia } from './datos';

/**
 * Añado programación reactiva
 * OBSERVABLE -> Me suscribo a los cambios
 * SUBECT -> Se comporta como un observable y me permite la emisión de datos
 */

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DatosFormService {

  public tipos: Maestro[] = [
    { id: 1, title: 'Ingreso' },
    { id: 2, title: 'Gasto' }];

  private tipoConTags: MaestroConTag[] = [
    { id: 1, title: 'Nómina', tag: 1 },
    { id: 2, title: 'Ventas', tag: 1 },
    { id: 3, title: 'Intereses', tag: 1 },
    { id: 4, title: 'Hipoteca', tag: 2 },
    { id: 5, title: 'Compras', tag: 2 },
    { id: 6, title: 'Domicialiaciones', tag: 2 },
    { id: 7, title: 'Impuestos', tag: 2 }];

  // donde almaceno las transferencias "storage"
  private transferencias: TransferenciaModel[] = [];

  // Donde comunico los eventos
  // se suelen llamar como el "storage" mas "$" para tener encuenta que son string vivos
  private transferencias$: Subject<TransferenciaModel[]> = new Subject<TransferenciaModel[]> ();
  constructor() { }


  // genero una nueva transferencia con la clase Transferencia basada en el modelo TransferenciaModel
  getNuevaTransferencia(): TransferenciaModel {
    return new Transferencia(
      new Date(Date.now()), 
      0,
      this.tipos[0].id,
      this.getCategoriaBase(this.tipos[0].id)
    );
  }

  getCategoriasPorTipo(tipo): MaestroConTag[] {
    return this.tipoConTags.filter(c => c.tag === tipo);
  }
  getCategoriaBase(tipoId): number {
    return this.getCategoriasPorTipo(tipoId)[0].id;
  }

  // guardo las transferencias y lo notifico
  postTransferencias(transferencia: Transferencia){
    // clono transferencia creado un objeto vacio asignadole los datos de tranferencia
    let transferenciaClone: Transferencia = Object.assign({}, transferencia);
    this.transferencias.push(transferenciaClone);

    this.transferencias$.next(this.transferencias);
  }

  getTransferencias$(): Observable<TransferenciaModel[]>{
    // retorno el almacen con asObservable para emitir los cambio pero solo lectura
    return this.transferencias$.asObservable();

  }

}
