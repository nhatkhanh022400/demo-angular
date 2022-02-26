import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterArticleDetailComponent } from './footer-article-detail.component';

describe('FooterArticleDetailComponent', () => {
  let component: FooterArticleDetailComponent;
  let fixture: ComponentFixture<FooterArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterArticleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
