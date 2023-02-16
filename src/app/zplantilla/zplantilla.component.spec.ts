import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZplantillaComponent } from './zplantilla.component';

describe('ZplantillaComponent', () => {
  let component: ZplantillaComponent;
  let fixture: ComponentFixture<ZplantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZplantillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZplantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
