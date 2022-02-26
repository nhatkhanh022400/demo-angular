import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-article',
  templateUrl: './footer-article.component.html',
  styleUrls: ['./footer-article.component.css']
})
export class FooterArticlesComponent implements OnInit {

  footers =[
    {name: 'hive-left', img: 'assets/img/Group202.png'},
    {name: 'logo-bee', img: 'assets/img/Group.jpg'},
    {name: 'hive-right', img: 'assets/img/Group201.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
