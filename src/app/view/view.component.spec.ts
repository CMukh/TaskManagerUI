import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view.component';
import {APP_BASE_HREF} from '@angular/common';
import { CONST_ROUTES } from 'src/app/app.routing';
import { HttpModule } from '@angular/http';
import { AddComponent } from 'src/app/add/add.component';
import { UpdateComponent } from 'src/app/update/update.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

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
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
