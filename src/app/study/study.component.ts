import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {
  coment:string="足し算をしましょう";
  text1:string;
  text2:string;

  constructor() { }

  addAndShow() : void {
    let int1:number;
    let int2:number;
    this.coment=this.text1;
    this.coment=this.text2;
  }

  ngOnInit() {
  }

}
