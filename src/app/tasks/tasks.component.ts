import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  constructor(private authsevice:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.authsevice.getTasks()
      .subscribe(data=>{
          this.tasks = data;
      },error=>{
        this.authsevice.logout();
        this.router.navigateByUrl("/login");
      });
  }
  onLogout(){
    this.router.navigateByUrl("/new-task");
  }
  onNewTask(){
    this.router.navigateByUrl("/new-task")
  }
}
