import { faAngleDoubleRight, faBars, faBorderNone, faCog, faFile, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faCog = faCog;
  faBars = faBars;
  faAngleDoubleRight = faAngleDoubleRight;
  faBorderNone = faBorderNone;
  faFile = faFile;
  faSignOutAlt = faSignOutAlt;



}
