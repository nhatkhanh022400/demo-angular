import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {

  navMenus = [
    {
      sildeOne: 'Thiết lập chung',
      // fontOne: faChevronDown as IconProp,

      sildeTwo: 'Thông Tin Công Ty',
      fontTwo: 'bi bi-building',
      colorTwo: 'colorBlue',
      sildeThree: 'Tình Trạng Hợp Đồng',
      fontThree: 'bi bi-currency-dollar',
      colorThree: 'colorRed'
    },
    {
      sildeOne: 'Quản trị hệ thống',

      sildeTwo: 'Nhân Sự',
      fontTwo: 'bi bi-person-fill',
      colorTwo: 'colorGreen',
      sildeThree: 'Vai trò',
      fontThree: 'bi bi-people-fill',
      colorThree: 'colorYellow'
    },
    {
      sildeOne: 'Thiết lập dữ liệu bắt buộc',

      sildeTwo: 'Cơ Cấu Tổ Chức',
      fontTwo: 'bi bi-diagram-3-fill',
      colorTwo: 'colorBlue',
      sildeThree: 'Cơ Cấu Chức Danh',
      fontThree: 'bi bi-person-workspace',
      colorThree: 'colorGreen'
    },
    {
      sildeOne: 'Thiết lập hệ thống cơ cấu tổ chức',

      sildeTwo: 'Biểu mẫu bảng MTCV',
      fontTwo: 'bi bi-file-earmark-text',
      colorTwo: 'colorSliver',
    },
    {
      sildeOne: 'Thiết lập cho hệ thống đánh giá n.lực',

      sildeTwo: 'Cấu hình công ty',
      fontTwo: 'bi bi-gear-fill',
      colorTwo: 'colorBlue',
      sildeThree: 'Biểu mẫu Email',
      fontThree: 'bi bi-envelope-fill',
      colorThree: 'colorBlue'
    },

  ]

  constructor() {
    // this.myfaChevronDown = {faChevronDown}
  }

  ngOnInit(): void {
    // this.myfaChevronDown = faChevronDown
  }

}
