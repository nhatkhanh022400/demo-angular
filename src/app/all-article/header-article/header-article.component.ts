import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-article',
  templateUrl: './header-article.component.html',
  styleUrls: ['./header-article.component.css']
})
export class HeaderArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titles = [
    {
      name: '前書き'
    },
    {
      name: '企業理念'
    },
    {
      name: '会社概要'
    },
    {
      name: '営業形態'
    },
    {
      name: 'レビュー'
    },
    {
      name: '店舗情報'
    },
    {
      name: 'ニュース'
    },
    {
      name: 'お問い合わせ'
    },

  ]

}

