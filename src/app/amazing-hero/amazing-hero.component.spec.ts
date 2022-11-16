import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingHeroComponent } from './amazing-hero.component';

describe('AmazingHeroComponent', () => {
  let component: AmazingHeroComponent;
  let fixture: ComponentFixture<AmazingHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazingHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazingHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
