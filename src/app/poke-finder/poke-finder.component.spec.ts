import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFinderComponent } from './poke-finder.component';

describe('PokeFinderComponent', () => {
  let component: PokeFinderComponent;
  let fixture: ComponentFixture<PokeFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
