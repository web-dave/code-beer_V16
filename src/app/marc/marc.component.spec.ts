import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcComponent } from './marc.component';

describe('MarcComponent', () => {
  let component: MarcComponent;
  let fixture: ComponentFixture<MarcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MarcComponent]
    });
    fixture = TestBed.createComponent(MarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
