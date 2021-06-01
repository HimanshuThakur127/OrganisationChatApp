import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesangerComponent } from './mesanger.component';

describe('MesangerComponent', () => {
  let component: MesangerComponent;
  let fixture: ComponentFixture<MesangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
