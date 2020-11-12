import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAuthorResultsComponent } from './search-author-results.component';

describe('SearchAuthorResultsComponent', () => {
  let component: SearchAuthorResultsComponent;
  let fixture: ComponentFixture<SearchAuthorResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAuthorResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAuthorResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
