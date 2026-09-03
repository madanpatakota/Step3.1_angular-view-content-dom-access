import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncapsulationA } from './encapsulation-a';

describe('EncapsulationA', () => {
  let component: EncapsulationA;
  let fixture: ComponentFixture<EncapsulationA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationA],
    }).compileComponents();

    fixture = TestBed.createComponent(EncapsulationA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
