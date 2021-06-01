import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessangerBoxComponent } from './messanger-box.component';

describe('MessangerBoxComponent', () => {
  let component: MessangerBoxComponent;
  let fixture: ComponentFixture<MessangerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessangerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessangerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
