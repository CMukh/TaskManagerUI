import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update.component';
import {APP_BASE_HREF} from '@angular/common';
import { CONST_ROUTES } from 'src/app/app.routing';
import { HttpModule } from '@angular/http';
import { AddComponent } from 'src/app/add/add.component';
import { ViewComponent } from 'src/app/view/view.component';


describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

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
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
