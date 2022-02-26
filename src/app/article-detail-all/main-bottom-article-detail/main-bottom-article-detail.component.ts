import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-bottom-article-detail',
  templateUrl: './main-bottom-article-detail.component.html',
  styleUrls: ['./main-bottom-article-detail.component.css']
})
export class MainBottomArticleDetailComponent implements OnInit {
  relates = [
    {
      img: 'assets/img/layout1.png',infor: '五目店舗のグランドオープン'
    },
    {
      img: 'assets/img/layout2.png',infor: '会員登録の規定'
    },
    {
      img: 'assets/img/layout4.png',infor: '国際女性の日(3月8日)のおすすめギフト'
    },
    {
      img: 'assets/img/layout3.png',infor: '会員登録の規定'
    },
    {
      img: 'assets/img/layout3.png',infor: '会員登録の規定'
    },
    {
      img: 'assets/img/layout1.png',infor: '五目店舗のグランドオープン'
    },
    {
      img: 'assets/img/layout4.png',infor: '国際女性の日(3月8日)のおすすめギフト'
    },
    {
      img: 'assets/img/layout2.png',infor: '会員登録の規定'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
