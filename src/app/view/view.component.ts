import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Model/task';
import { DatePipe } from '@angular/common';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  list:Task[];
  list1:Task[];
  task:Task;
  taskName:string;
  parentTaskName:string;
  priority:number;
  priorityFrom:number;
  priorityTo:number;
  startDate:string;
  endDate:string;
  constructor(private _service:SharedService) { 
    this.ViewAllTasks();
  }

  ngOnInit() {
  }

  ViewAllTasks(){
    this._service.getAllTasks()
            .subscribe(
              res=>{this.list= res;this.list1= this.list;     
            },
            error => {
                console.log(error);
            }
            ); 
  }

  deleteTask(taskToDelete){

    this._service.DeleteTask(taskToDelete.TaskID)
    .subscribe(
     res=>{ console.log(res)
    }
    );
    this.list1 = this.list1.filter(obj => obj !== taskToDelete)
  }

  SearchByTaskName(){
    this.list1=this.list.filter(i=>i.TaskName.startsWith(this.taskName));
  }

  SearchByParentTaskName(){
    this.list1=this.list.filter(i=>i.ParentTaskName.startsWith(this.parentTaskName));
  }

  SearchByPriority(){
    if (this.priorityFrom==0 && this.priorityTo==0)
      this.list1=this.list;
    else
      this.list1=this.list.filter(i=>i.Priority>=this.priorityFrom && i.Priority<=this.priorityTo );
  }
  SearchByStartDate(){
    this.list1=this.list.filter(i=>i.Start_Date.substr(6,4)+"-"+i.Start_Date.substr(3,2)+"-"+i.Start_Date.substr(0,2)===this.startDate);
  }

  SearchByEndDate(){
  this.list1=this.list.filter(i=>i.End_Date.substr(6,4)+"-"+i.End_Date.substr(3,2)+"-"+i.End_Date.substr(0,2)===this.endDate);

  }
  

}
 
 

 
 
 