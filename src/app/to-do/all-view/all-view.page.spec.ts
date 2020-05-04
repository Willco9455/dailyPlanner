import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllViewPage } from './all-view.page';

describe('AllViewPage', () => {
  let component: AllViewPage;
  let fixture: ComponentFixture<AllViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
