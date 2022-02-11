import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeRightComponent } from './tree-right.component';

describe('TreeRightComponent', () => {
  let component: TreeRightComponent;
  let fixture: ComponentFixture<TreeRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
