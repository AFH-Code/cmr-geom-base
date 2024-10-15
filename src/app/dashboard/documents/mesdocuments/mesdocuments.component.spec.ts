import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesdocumentsComponent } from './mesdocuments.component';

describe('MesdocumentsComponent', () => {
  let component: MesdocumentsComponent;
  let fixture: ComponentFixture<MesdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesdocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
