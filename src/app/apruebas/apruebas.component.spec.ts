import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApruebasComponent } from './apruebas.component';

describe('ApruebasComponent', () => {
  let component: ApruebasComponent;
  let fixture: ComponentFixture<ApruebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApruebasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
