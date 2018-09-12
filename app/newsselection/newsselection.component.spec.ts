import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsselectionComponent } from './newsselection.component';

describe('NewsselectionComponent', () => {
  let component: NewsselectionComponent;
  let fixture: ComponentFixture<NewsselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
