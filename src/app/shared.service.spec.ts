
import {SharedService } from   './shared.service';
import { HttpModule,ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed ,inject} from '@angular/core/testing';
import { Http } from '@angular/http';
import { async } from '@angular/core/testing';
import { XHRBackend } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { getTestBed } from '@angular/core/testing';
import { MockConnection } from '@angular/http/testing';
import { RequestMethod } from '@angular/http';
import { Task } from 'src/app/Model/task';
 

describe('Blog Service', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        SharedService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [ MockBackend,BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
         }
      ],
      imports: [
        FormsModule,
        HttpModule
      ]
    });
 
    TestBed.compileComponents();
  }));
 
  it('should test the service', async(() => {
    let service: SharedService = getTestBed().get(SharedService);
      (result) => {
         expect(result).toBeDefined();
      }
    
  })); 

  it('should add tasks', async(() => {
    let service: SharedService = getTestBed().get(SharedService);
    let mockBackend:MockBackend=getTestBed().get(MockBackend);
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
      });

      let data: Task = new Task(0,'Task11','','01-01-2018','01-01-2018',10);
                                        service.AddTask(data).subscribe(
      (successResult) => {
        expect(successResult).toBeDefined();
        expect(successResult.status).toBe(201);
      });
    }));

    it('should delete task', async(() => {
      let service: SharedService = getTestBed().get(SharedService);
      let mockBackend:MockBackend=getTestBed().get(MockBackend);
      mockBackend.connections.subscribe(connection => {
        expect(connection.request.method).toBe(RequestMethod.Delete);
      connection.mockRespond(new Response(new ResponseOptions({status: 200})));
      });
     
      service.DeleteTask(1).subscribe(
        (successResult) => {
          expect(successResult).toBeDefined();
          expect(successResult.status).toBe(200);
        });
    }));
  
 
});  



