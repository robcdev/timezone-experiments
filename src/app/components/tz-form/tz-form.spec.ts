import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzFormComponent } from './tz-form';

describe('Form', () => {
  let component: TzFormComponent;
  let fixture: ComponentFixture<TzFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TzFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
