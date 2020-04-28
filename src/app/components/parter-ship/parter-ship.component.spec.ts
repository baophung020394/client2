import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParterShipComponent } from './parter-ship.component';

describe('ParterShipComponent', () => {
  let component: ParterShipComponent;
  let fixture: ComponentFixture<ParterShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParterShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParterShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
