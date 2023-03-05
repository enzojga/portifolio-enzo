import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EducationInfoComponent } from './education-info.component';

describe('EducationInfoComponent', () => {
  let component: EducationInfoComponent;
  let fixture: ComponentFixture<EducationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the experience right.', () => {
    component.education = {...component.education, experience: 'BLA BLA BLA'},
    fixture.detectChanges();
    const educationExperience = fixture.debugElement.query(By.css('#experience'));
    console.log(educationExperience);
    expect(1).toEqual(0);
  });
});
