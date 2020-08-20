import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TESTPAGEPage } from './test-page.page';

describe('TESTPAGEPage', () => {
  let component: TESTPAGEPage;
  let fixture: ComponentFixture<TESTPAGEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TESTPAGEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TESTPAGEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
