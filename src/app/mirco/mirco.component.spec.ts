import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MircoComponent } from './mirco.component';

describe('MircoComponent', () => {
  let component: MircoComponent;
  let fixture: ComponentFixture<MircoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MircoComponent]
    });
    fixture = TestBed.createComponent(MircoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
