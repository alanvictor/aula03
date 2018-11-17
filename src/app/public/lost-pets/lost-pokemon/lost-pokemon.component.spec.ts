import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPokemonComponent } from './lost-pokemon.component';

describe('LostPokemonComponent', () => {
  let component: LostPokemonComponent;
  let fixture: ComponentFixture<LostPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
