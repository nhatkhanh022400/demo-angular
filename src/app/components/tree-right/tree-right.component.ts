import { Component, OnInit } from '@angular/core';
import { faChevronDown, faFileExcel, faCloudDownloadAlt, faUpload, faPlus, faSyncAlt, faSitemap , faPencilAlt, faTrashAlt, faTimesCircle, faSave} from '@fortawesome/free-solid-svg-icons';


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

  buttoms = [

  ]
  constructor() { }

  ngOnInit(): void {
  }
  faChevronDown = faChevronDown;
  faPlus = faPlus;
  faFileExcel = faFileExcel;
  faCloudDownloadAlt = faCloudDownloadAlt;
  faUpload = faUpload;
  faSyncAlt = faSyncAlt;
  faSitemap = faSitemap;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faTimesCircle = faTimesCircle;
  faSave = faSave;

}
