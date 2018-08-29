import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add.component';
import {MenuComponent} from 'src/app/menu/menu.component';
import {ViewComponent} from 'src/app/view/view.component';
import {UpdateComponent} from 'src/app/update/update.component';
import {APP_BASE_HREF} from '@angular/common';
import { CONST_ROUTES } from 'src/app/app.routing';
import { HttpModule } from '@angular/http';
import { Task } from 'src/app/Model/task';

describe('AddComponent', () => {
  let component: AddComponent;
  let viewcomponent: ViewComponent;
  let fixture: ComponentFixture<AddComponent>;
  let fixture1: ComponentFixture<ViewComponent>;
  var originalTimeout;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule,
        CONST_ROUTES ],
        providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}],
      declarations: [ AddComponent, ViewComponent,UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;

    fixture1 = TestBed.createComponent(ViewComponent);
    viewcomponent = fixture1.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

});
