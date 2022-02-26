import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopArticleDetailComponent } from './main-top-article-detail.component';

describe('MainTopArticleDetailComponent', () => {
  let component: MainTopArticleDetailComponent;
  let fixture: ComponentFixture<MainTopArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTopArticleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
