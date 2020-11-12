import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetailsComponent } from './about-details.component';

describe('AboutDetailsComponent', () => {
  let component: AboutDetailsComponent;
  let fixture: ComponentFixture<AboutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
