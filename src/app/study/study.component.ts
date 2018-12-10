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
    let forResult:string="正しい値を入力しましょう";
    let int1:number;
    let int2:number;

    //文字列を数値に変換する
    int1=Number(this.text1);
    int2=Number(this.text2);

    if(!Number.isNaN(int1) && !Number.isNaN(int2)){
      forResult =`${int1}+${int2}=${int1+int2}`;
    }
    this.coment=forResult;

  }

  ngOnInit() {
  }

}
