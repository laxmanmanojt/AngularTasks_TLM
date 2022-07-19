import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesList: any;
  txt_title: string = '';
  txt_desc: string = '';
  constructor(private route: Router) { }

  ngOnInit() {
    this.notesList = [
      { title: 'A', desc: 'a' }
    ]
  }
  funDelRec(rec: any) {
    this.notesList.splice(this.notesList.indexOf(rec), 1);
    console.log(this.notesList)
  }

  funSaveNotes() {
    let rec = { title: this.txt_title, desc: this.txt_desc };
    this.notesList.push(rec);
    this.txt_title = '';
    this.txt_desc = '';
  }
  funNavigatetoLogin() {
    this.route.navigateByUrl('/login');
  }
}
