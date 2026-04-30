import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTriplecolComponent } from './layout-triplecol.component';

describe('LayoutTriplecolComponent', () => {
  let component: LayoutTriplecolComponent;
  let fixture: ComponentFixture<LayoutTriplecolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutTriplecolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTriplecolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
