import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculo: Array<Vehiculo> = [];
  constructor() { }

  ngOnInit() {
  }

}