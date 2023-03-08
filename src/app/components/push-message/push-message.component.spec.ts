import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushMessageComponent } from './push-message.component';

describe('PushMessageComponent', () => {
  let component: PushMessageComponent;
  let fixture: ComponentFixture<PushMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
