import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyReorderComponent } from './easy-reorder.component';

describe('EasyReorderComponent', () => {
  let component: EasyReorderComponent;
  let fixture: ComponentFixture<EasyReorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyReorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
