import { Component, OnInit } from '@angular/core';
import { faChevronDown, faBuilding, faDollarSign, faUser, faSitemap, faStreetView, faFileAlt, faCogs, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
