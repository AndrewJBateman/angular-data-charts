import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCountriesComponent } from './covid-countries.component';

describe('CovidCountriesComponent', () => {
  let component: CovidCountriesComponent;
  let fixture: ComponentFixture<CovidCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
