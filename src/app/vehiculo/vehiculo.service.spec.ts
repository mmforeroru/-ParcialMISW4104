/* tslint:disable:no-unused-variable */

import { RouterTestingModule } from '@angular/router/testing';
import { VehiculoService } from './vehiculo.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoComponent } from './vehiculo.component';
import { Vehiculo } from './vehiculo';

describe('BookListComponent', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;
  let debug: DebugElement;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoComponent ],
      providers: [ VehiculoService ]
    })
    .compileComponents();
  }));
 
 
  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;
    component.vehiculos = [ new Vehiculo( faker.number.int(),
      faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.number.int(),
       faker.number.int(),
       faker.lorem.sentence(),
        faker.lorem.sentence())
    ]
 
    fixture.detectChanges();
    debug = fixture.debugElement;
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });
 
  

 
 
 });