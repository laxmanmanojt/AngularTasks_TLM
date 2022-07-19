import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  funNavigatetoLogin(){
    this.route.navigateByUrl('/login');
  }
}
