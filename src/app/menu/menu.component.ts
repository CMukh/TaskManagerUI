import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
active:boolean=false;
 
  constructor(public router:Router) { }

  ngOnInit() {
     if(window.location.href.endsWith("add") )
      this.updateStatusView();
  
  }
  updateStatusAdd(){
   this.active=true;
  }
  updateStatusView(){
    this.active=false;
   }
  
}
