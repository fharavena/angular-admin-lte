import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosLTEComponent } from './elementos-lte.component';

describe('ElementosLTEComponent', () => {
  let component: ElementosLTEComponent;
  let fixture: ComponentFixture<ElementosLTEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementosLTEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosLTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
