import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number=0;
  constructor(private authervice:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(user){
    this.authervice.login(user)
      .subscribe(resp=>{
          const jwt = resp.headers.get("Authorization");
          // console.log(resp.headers.get("Authorization"));
        this.authervice.saveToken(jwt);
        this.router.navigateByUrl("/tasks");
      },
        err=>{
          this.mode=1;
        });
  }

}
