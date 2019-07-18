import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBikeComponent } from './company-bike.component';

describe('CompanyBikeComponent', () => {
  let component: CompanyBikeComponent;
  let fixture: ComponentFixture<CompanyBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
