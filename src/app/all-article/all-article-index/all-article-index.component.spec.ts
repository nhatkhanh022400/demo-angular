import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArticleIndexComponent } from './all-article-index.component';

describe('AllArticleIndexComponent', () => {
  let component: AllArticleIndexComponent;
  let fixture: ComponentFixture<AllArticleIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllArticleIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArticleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
