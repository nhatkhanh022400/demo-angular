import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterArticleComponent } from './footer-article.component';

describe('FooterArticleComponent', () => {
  let component: FooterArticleComponent;
  let fixture: ComponentFixture<FooterArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
