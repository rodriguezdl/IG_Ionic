import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageThreadPage } from './message-thread.page';

describe('MessageThreadPage', () => {
  let component: MessageThreadPage;
  let fixture: ComponentFixture<MessageThreadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageThreadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageThreadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
