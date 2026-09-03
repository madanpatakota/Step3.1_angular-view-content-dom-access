import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncapsulationB } from './encapsulation-b';

describe('EncapsulationB', () => {
  let component: EncapsulationB;
  let fixture: ComponentFixture<EncapsulationB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationB],
    }).compileComponents();

    fixture = TestBed.createComponent(EncapsulationB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
