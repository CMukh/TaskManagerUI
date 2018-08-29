export class Task {
  
    TaskID:number;
    TaskName:string;
    ParentTaskName:string;
    Start_Date:string;
    End_Date:string;
    Priority:number;
    
    constructor(TaskID?:number,
        TaskName?:string,
        ParentTaskName?:string,
        Start_Date?:string,
        End_Date?:string,
        Priority?:number){
            this.TaskID=TaskID;
            this.TaskName=TaskName;
            this.ParentTaskName=ParentTaskName;
            this.Start_Date=Start_Date;
            this.End_Date=End_Date;
            this.Priority=Priority
    }
  

}
