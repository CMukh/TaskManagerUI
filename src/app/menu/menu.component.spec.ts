import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { CONST_ROUTES } from 'src/app/app.routing';
import { MenuComponent } from './menu.component';
import {ViewComponent} from 'src/app/view/view.component';
import {UpdateComponent} from 'src/app/update/update.component';
import {AddComponent} from 'src/app/add/add.component';
import { FormsModule } from '@angular/forms';

//import { HttpModule } from '@angular/http';
describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,// HttpModule,
        CONST_ROUTES
       ],
        providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}],
      declarations: [ MenuComponent,AddComponent, ViewComponent,UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
