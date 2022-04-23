import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitulosComponent } from './subtitulos.component';

describe('SubtitulosComponent', () => {
  let component: SubtitulosComponent;
  let fixture: ComponentFixture<SubtitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
