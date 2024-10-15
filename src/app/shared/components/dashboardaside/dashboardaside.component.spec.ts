import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardasideComponent } from './dashboardaside.component';

describe('DashboardasideComponent', () => {
  let component: DashboardasideComponent;
  let fixture: ComponentFixture<DashboardasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardasideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
