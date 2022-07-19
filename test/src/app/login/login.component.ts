import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pwdVal: string = 'test';
  usernameVal: string = 'test';
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  funNavigatetoNotes(){
    // We can use routeguard canActivate also for authentication... 
    if(this.pwdVal==='test' && this.usernameVal === 'test'){
      this.route.navigateByUrl('/notes');
    }
  }

}
