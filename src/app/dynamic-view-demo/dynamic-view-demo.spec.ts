import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicViewDemo } from './dynamic-view-demo';

describe('DynamicViewDemo', () => {
  let component: DynamicViewDemo;
  let fixture: ComponentFixture<DynamicViewDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicViewDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicViewDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
