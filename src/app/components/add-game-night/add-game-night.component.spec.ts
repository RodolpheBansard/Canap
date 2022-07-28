import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameNightComponent } from './add-game-night.component';

describe('AddGameNightComponent', () => {
  let component: AddGameNightComponent;
  let fixture: ComponentFixture<AddGameNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGameNightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGameNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
