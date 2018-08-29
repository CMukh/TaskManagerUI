import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { MenuComponent } from './menu/menu.component';
import { CONST_ROUTES } from 'src/app/app.routing';
import { SharedService } from 'src/app/shared.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule, 
    HttpModule,
   CONST_ROUTES
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
