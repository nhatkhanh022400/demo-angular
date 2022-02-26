import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderArticleDetailComponent } from './header-article-detail.component';

describe('HeaderArticleDetailComponent', () => {
  let component: HeaderArticleDetailComponent;
  let fixture: ComponentFixture<HeaderArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderArticleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
