import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoMainComponent } from './cuerpo-main.component';

describe('CuerpoMainComponent', () => {
  let component: CuerpoMainComponent;
  let fixture: ComponentFixture<CuerpoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuerpoMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
