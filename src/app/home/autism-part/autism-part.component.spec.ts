import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutismPartComponent } from './autism-part.component';

describe('AutismPartComponent', () => {
  let component: AutismPartComponent;
  let fixture: ComponentFixture<AutismPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutismPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutismPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
