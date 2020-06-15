import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddActionPage } from './add-action.page';

describe('AddActionPage', () => {
  let component: AddActionPage;
  let fixture: ComponentFixture<AddActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
