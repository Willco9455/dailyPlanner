import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeekViewPage } from './week-view.page';

describe('WeekViewPage', () => {
  let component: WeekViewPage;
  let fixture: ComponentFixture<WeekViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeekViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
