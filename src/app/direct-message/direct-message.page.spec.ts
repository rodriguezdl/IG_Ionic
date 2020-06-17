import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectMessagePage } from './direct-message.page';

describe('DirectMessagePage', () => {
  let component: DirectMessagePage;
  let fixture: ComponentFixture<DirectMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
