import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAppComponent } from './container-app.component';

describe('ContainerAppComponent', () => {
  let component: ContainerAppComponent;
  let fixture: ComponentFixture<ContainerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
