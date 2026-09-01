import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalContentParent } from './signal-content-parent';

describe('SignalContentParent', () => {
  let component: SignalContentParent;
  let fixture: ComponentFixture<SignalContentParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalContentParent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalContentParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
