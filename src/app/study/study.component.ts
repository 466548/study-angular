import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {
  result:string="足し算をしましょう";
  constructor() { }

  ngOnInit() {
  }

}
