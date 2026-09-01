import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalViewDemo } from './signal-view-demo';

describe('SignalViewDemo', () => {
  let component: SignalViewDemo;
  let fixture: ComponentFixture<SignalViewDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalViewDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalViewDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
