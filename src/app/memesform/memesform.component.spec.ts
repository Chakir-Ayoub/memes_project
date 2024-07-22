import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesformComponent } from './memesform.component';

describe('MemesformComponent', () => {
  let component: MemesformComponent;
  let fixture: ComponentFixture<MemesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemesformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
