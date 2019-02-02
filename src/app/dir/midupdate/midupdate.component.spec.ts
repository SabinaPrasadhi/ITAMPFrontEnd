import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidupdateComponent } from './midupdate.component';

describe('MidupdateComponent', () => {
  let component: MidupdateComponent;
  let fixture: ComponentFixture<MidupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
