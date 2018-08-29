import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Http,Headers,Response} from '@angular/http';
//import 'rxjs/add/operator/map';
//import {mao} 'rxjs/add/operator/map';
import {map} from 'rxjs/operators'
import { Task } from 'src/app/Model/task';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

baseURL="http://localhost/TaskManagerBusinesssLayer/api/Task/"
constructor(private _http: Http) { }
  
  getAllTasks():Observable<Task[]>
  {
    return this._http.get(this.baseURL)
        .pipe(map((res:Response) => <Task[]> res.json()))
  }
 
  getTask(it:number):Observable<Task>
  {
    return this._http.get(this.baseURL+it)
        .pipe(map((res:Response) => <Task>res.json()))
  }
  AddTask(item:Task)//:Observable<string>
  {
    return this._http.post(this.baseURL,item)
    .pipe(map((res:Response)=>res));
  }
  DeleteTask(Id:number)
  {
    return this._http.delete(this.baseURL+Id)
    .pipe(map((res:Response)=>res));
  }
  UpdateTask(item:Task)
  {
    return this._http.put(this.baseURL,item)
    .pipe(map((res:Response)=>res));
  }
}

