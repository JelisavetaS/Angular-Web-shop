import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentProductInfoComponent } from './parent-product-info.component';

describe('ParentProductInfoComponent', () => {
  let component: ParentProductInfoComponent;
  let fixture: ComponentFixture<ParentProductInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentProductInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
