import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';



@Component({
  selector: 'app-tree-right',
  templateUrl: './tree-right.component.html',
  styleUrls: ['./tree-right.component.css']
})
export class TreeRightComponent implements OnInit {
  treeViews = [
    {
      room: 'Phòng Tài chính Kế toán',
      code: 'TCKT',
      mission: 'Quản trị tài chính DN & đầu tư'
    },

    {
      room: 'Phòng Quản trị Nguồn nhân lực',
      code: 'QTNNL',
      mission: 'Xây dựng hệ thống & các'
    },

    {
      room: 'Phòng Marketing',
      code: 'MK',
      mission: 'Mô tả chung'
    },

    {
      room: 'Phòng R&D',
      code: 'RD',
      mission: 'Mô tả chung'
    },

    {
      room: 'Phòng Hành chính tổng hợp',
      code: 'HC',
      mission: 'Mô tả chung'
    },

    {
      room: 'Phòng Kỹ thuật',
      code: 'BGD-1-7',
      mission: 'Mô tả chung'
    }
  ]

  treeSmalls = [
    {
      room: 'Phòng phát triển thị trường',
      code: 'PTTT',
      mission: 'Marketing, chính sách giá'
    },

    {
      room: 'Phòng Kinh doanh',
      code: 'KD',
      mission: 'Mô tả chung'
    }

  ]

  fiveButtons = [
    {
      name: 'Refresh',
      icon: 'bi bi-arrow-clockwise',
      color: '#519eb5'
    },
    {
      name: 'Thêm mới',
      margins: '5px',
      icon: 'bi bi-plus',
      color: '#2aa843'
    },
    {
      name: 'Xuất file Excel',
      icon: 'bi bi-file-earmark-excel',
      color: '#2aa843'
    },
    {
      name: 'Tải file mẫu',
      icon: 'bi bi-cloud-arrow-down-fill',
      color: '#000000'
    },
    {
      name: 'Import',
      icon: 'bi bi-arrow-bar-up',
      color: '#a93226'
    }
  ]

  buttoms = [

  ]
  constructor() { }

  ngOnInit(): void {
  }


}
