import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingformComponent } from './testingform.component';

describe('TestingformComponent', () => {
  let component: TestingformComponent;
  let fixture: ComponentFixture<TestingformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingformComponent]
    });
    fixture = TestBed.createComponent(TestingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
