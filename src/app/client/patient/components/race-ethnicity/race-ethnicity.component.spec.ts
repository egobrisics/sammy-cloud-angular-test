import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceEthnicityComponent } from './race-ethnicity.component';

describe('RaceEthnicityComponent', () => {
  let component: RaceEthnicityComponent;
  let fixture: ComponentFixture<RaceEthnicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceEthnicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceEthnicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
