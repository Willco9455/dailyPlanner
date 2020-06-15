import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayViewPage } from './day-view.page';

describe('DayViewPage', () => {
  let component: DayViewPage;
  let fixture: ComponentFixture<DayViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
