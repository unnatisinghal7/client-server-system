import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeserverComponent } from './homeserver.component';

describe('HomeserverComponent', () => {
  let component: HomeserverComponent;
  let fixture: ComponentFixture<HomeserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
