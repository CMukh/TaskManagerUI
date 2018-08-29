import { Component, OnInit } from '@angular/core';
import { MenuComponent } from 'src/app/menu/menu.component';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/Model/task';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id:number;
task:Task;
list:Task[];
dt:Date;
//sdate :Date;
//edate:Date;
  constructor(private _activatedroute:ActivatedRoute,private _service:SharedService) {
    this.dt=new Date(2018,1,1)
   }

  ngOnInit() {
    this.task=new Task();
    this.id=this._activatedroute.snapshot.params['id'];
    this.getTask(this.id);
    this.getParentTaskNames();
 
  }

  updateTask(){ 
    this._service.UpdateTask (this.task)
      .subscribe();
    alert("Task updated successfully!!")

  }
  getTask(id){
     this._service.getTask(id)
            .subscribe(
              res=>{this.task= res     
            },
            error => {
                console.log(error);
            }
            ); 
  }
  
  
  getParentTaskNames()
  {
  this._service.getAllTasks()
  .subscribe(
    res=>{this.list= res;
  },
  error => {
          console.log(error);
  }
  ); 
}

}