import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDoublecolComponent } from './layout-doublecol.component';

describe('LayoutDoublecolComponent', () => {
  let component: LayoutDoublecolComponent;
  let fixture: ComponentFixture<LayoutDoublecolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutDoublecolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutDoublecolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
