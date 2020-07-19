import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopOverPage } from './pop-over.page';

describe('PopOverPage', () => {
  let component: PopOverPage;
  let fixture: ComponentFixture<PopOverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopOverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopOverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
