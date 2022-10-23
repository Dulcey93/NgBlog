import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostsComponent } from './list-posts.component';

describe('ListPostsComponent', () => {
  let component: ListPostsComponent;
  let fixture: ComponentFixture<ListPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
