import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faBuilding, faDollarSign, faUser, faSitemap, faStreetView, faFileAlt, faCogs, faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
      fontOne: 'fa-chevron-down',
      sildeTwo: 'Thông Tin Công Ty',
      fontTwo: 'fa-building',
      colorTwo: '#18a1b4',
      sildeThree: 'Tình Trạng Hợp Đồng',
      fontThree: 'fa-usd',
      colorThree: 'color: red'
    },
    {
      sildeOne: 'Quản trị hệ thống',
      fontOne: 'fa-chevron-down',
      sildeTwo: 'Nhân Sự',
      fontTwo: 'fa-user',
      colorTwo: 'style="color: #2ba747"',
      sildeThree: 'Vai trò',
      fontThree: 'fa-users',
      colorThree: 'style="color: #fbc110"'
    },
    {
      sildeOne: 'Thiết lập dữ liệu bắt buộc',
      fontOne: 'fa-chevron-down',
      sildeTwo: 'Cơ Cấu Tổ Chức',
      fontTwo: 'fa-sitemap',
      colorTwo: 'style="color: #40919f"',
      sildeThree: 'Cơ Cấu Chức Danh',
      fontThree: 'fa-street-view',
      colorThree: 'style="color: #2ba747"'
    },
    {
      sildeOne: 'Thiết lập hệ thống cơ cấu tổ chức',
      fontOne: 'fa-chevron-down',
      sildeTwo: 'Biểu mẫu bảng MTCV',
      fontTwo: 'fa-file-text-o',
      colorTwo: 'style="color: #aeb5bb"',
    },
    {
      sildeOne: 'Thiết lập cho hệ thống đánh giá n.lực',
      fontOne: 'fa-chevron-down',
      sildeTwo: 'Cấu hình công ty',
      fontTwo: 'fa-cogs',
      colorTwo: 'style="color: #18a1b4"',
      sildeThree: 'Biểu mẫu Email',
      fontThree: 'fa-envelope',
      colorThree: 'style="color: #18a1b4"'
    },

  ]

  constructor() {
    // this.myfaChevronDown = {faChevronDown}
  }

  ngOnInit(): void {
    // this.myfaChevronDown = faChevronDown
  }
  faChevronDown = faChevronDown;
  faBuilding = faBuilding;
  faDollarSign = faDollarSign;
  faUser = faUser;
  faSitemap = faSitemap;
  faStreetView = faStreetView;
  faFileAlt = faFileAlt;
  faCogs = faCogs;
  faEnvelope = faEnvelope;

}
