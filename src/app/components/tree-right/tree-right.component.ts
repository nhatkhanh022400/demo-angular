import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';



@Component({
  selector: 'app-tree-right',
  templateUrl: './tree-right.component.html',
  styleUrls: ['./tree-right.component.css']
})
export class TreeRightComponent implements OnInit {

  treeViews = [
      {
        room: 'Hệ thống tư vấn quản lý trực tập',
        note: 'Hệ thống tư vấn quản lý trực tập',
        code: 'Mã',
        mission: 'Mô tả chức năng nhiệm vụ',
        spaceOne: [
          {
            room: 'Giám đốc',
            note: 'Giám đốc',
            code: 'BGD-1',
            mission: 'Điều hành hoạt động doanh nghệp',
            spaceTwo:[
              {
                room: 'Phó giám đốc Phụ trách kinh doanh',
                note: 'Phó giám đốc Phụ trách kinh doanh',
                code: 'BGD-2',
                mission: 'Điều hành hoạt động doanh nghệp',
                font: 'bi bi-chevron-down',
                spaceThree:[
                  {
                    room: 'Phòng phát triển thị trường',
                    note: 'Phòng phát triển thị trường',
                    code: 'PTTT',
                    mission: 'Marketting',
                    space:[]
                  },

                  {
                    room: 'Phòng Kinh doanh',
                    note: 'Phòng Kinh doanh',
                    code: 'KD',
                    mission: 'Mô tả chung...',
                    space:[]
                  }
                ]
              },

              {
                room: 'Phòng Tài chính Kế toán',
                note: 'Phòng Tài chính Kế toán',
                code: 'TCKT',
                mission: 'Quản trị Tài chính',

              },

              {
                room: 'Phòng Quản trị nguồn nhân lực',
                note: 'Phòng Quản trị nguồn nhân lực',
                code: 'QTNNL',
                mission: 'Xây dựng hệ thống & các chính sách',

              },

              {
                room: 'Phòng Marketing',
                note: 'Phòng Marketing',
                code: 'MK',
                mission: 'Mô tả chung...',

              },

              {
                room: 'Phòng R&D',
                note: 'Phòng R&D',
                code: 'RD',
                mission: 'Mô tả chung...',

              },

              {
                room: 'Phòng Hành chính tổng hợp',
                note: 'Phòng Hành chính tổng hợp',
                code: 'HC',
                mission: 'Mô tả chung...',

              },

              {
                room: 'Phòng Kỹ thuật',
                note: 'Phòng Kỹ thuật',
                code: 'BGD-1-7',
                mission: 'Mô tả chung...',

              }

            ]
          }
        ]
      },
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
          icon: 'bi bi-plus-lg',
          color: '#2aa843',
          popup: '#popup'
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

  constructor() { }

  ngOnInit(): void {
  }


}
