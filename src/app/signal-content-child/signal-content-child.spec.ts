import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalContentChild } from './signal-content-child';

describe('SignalContentChild', () => {
  let component: SignalContentChild;
  let fixture: ComponentFixture<SignalContentChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalContentChild],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalContentChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
