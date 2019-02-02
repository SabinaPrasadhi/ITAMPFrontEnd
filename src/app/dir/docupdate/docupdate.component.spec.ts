import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocupdateComponent } from './docupdate.component';

describe('DocupdateComponent', () => {
  let component: DocupdateComponent;
  let fixture: ComponentFixture<DocupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
