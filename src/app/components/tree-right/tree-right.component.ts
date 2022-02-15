import { Component, OnInit } from '@angular/core';
import { faChevronDown, faFileExcel, faCloudDownloadAlt, faUpload, faPlus, faSyncAlt, faSitemap , faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tree-right',
  templateUrl: './tree-right.component.html',
  styleUrls: ['./tree-right.component.css']
})
export class TreeRightComponent implements OnInit {

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

}
