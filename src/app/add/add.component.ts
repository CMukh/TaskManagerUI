import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Model/task';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  task:Task;
  list:Task[];
  taskName:string;
  parentTaskName:string;
  priority:number=0;
  startDate:string;
  endDate:string;
  taskRes:string;
  constructor(private _service:SharedService) {this.getParentTaskNames(); }

  ngOnInit() {
  }

  addTask(){
    this.task=new Task(0,this.taskName,this.parentTaskName,this.startDate,this.endDate,this.priority);

    this._service.AddTask (this.task)
      .subscribe();
       // k=>{console.log("Task Added")
     // });
    alert("Task Added");
    this.reset();
  }

  reset(){
   this.taskName="";
   this.parentTaskName="";
   this.priority=0;
   this.startDate="";
   this.endDate="";
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
