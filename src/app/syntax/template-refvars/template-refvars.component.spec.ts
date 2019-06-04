import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefvarsComponent } from './template-refvars.component';

describe('TemplateRefvarsComponent', () => {
  let component: TemplateRefvarsComponent;
  let fixture: ComponentFixture<TemplateRefvarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefvarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefvarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
