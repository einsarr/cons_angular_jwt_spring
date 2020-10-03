import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.css']
})
export class NewTasksComponent implements OnInit {
  task;
  constructor(public authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveTask(task){
    this.authService.saveTask(task)
      .subscribe(resp=>{
          this.task = resp;
          this.router.navigateByUrl("/tasks");
      },err=>{
        console.log(err);
      });
  }

}
