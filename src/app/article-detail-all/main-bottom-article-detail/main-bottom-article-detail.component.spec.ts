import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBottomArticleDetailComponent } from './main-bottom-article-detail.component';

describe('MainBottomArticleDetailComponent', () => {
  let component: MainBottomArticleDetailComponent;
  let fixture: ComponentFixture<MainBottomArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBottomArticleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBottomArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
