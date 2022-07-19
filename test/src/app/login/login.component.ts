import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pwdVal: string = 'test';
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  funNavigatetoNotes(){
    this.route.navigateByUrl('/notes');
  }

}
