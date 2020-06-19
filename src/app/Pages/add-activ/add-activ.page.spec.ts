import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddActivPage } from './add-activ.page';

describe('AddActivPage', () => {
  let component: AddActivPage;
  let fixture: ComponentFixture<AddActivPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddActivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
