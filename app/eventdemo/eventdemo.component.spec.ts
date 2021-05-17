import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdemoComponent } from './eventdemo.component';

describe('EventdemoComponent', () => {
  let component: EventdemoComponent;
  let fixture: ComponentFixture<EventdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
