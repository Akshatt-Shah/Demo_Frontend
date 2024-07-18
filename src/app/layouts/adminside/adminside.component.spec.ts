import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsideComponent } from './adminside.component';

describe('AdminsideComponent', () => {
  let component: AdminsideComponent;
  let fixture: ComponentFixture<AdminsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsideComponent]
    });
    fixture = TestBed.createComponent(AdminsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
