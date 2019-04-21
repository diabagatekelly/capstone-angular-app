import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookResultsComponent } from './search-book-results.component';

describe('SearchBookResultsComponent', () => {
  let component: SearchBookResultsComponent;
  let fixture: ComponentFixture<SearchBookResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBookResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
