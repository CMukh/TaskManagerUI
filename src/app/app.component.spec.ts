import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MenuComponent} from 'src/app/menu/menu.component';
import { HttpModule } from '@angular/http';
import { CONST_ROUTES } from 'src/app/app.routing';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AddComponent } from 'src/app/add/add.component';
import { ViewComponent } from 'src/app/view/view.component';
import { UpdateComponent } from 'src/app/update/update.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule,
        CONST_ROUTES ],
        providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}],
      declarations: [ AppComponent,AddComponent,
        MenuComponent, ViewComponent,UpdateComponent ],

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  

});
