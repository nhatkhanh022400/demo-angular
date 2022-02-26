import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAngularComponent } from '../demo-angular/demo-angular.component';
import { NavLeftComponent } from '../nav-left/nav-left.component';
import { HeaderComponent } from '../header/header.component';
import { PopupComponent } from '../popup/popup.component';
import { TreeRightComponent } from '../tree-right/tree-right.component';
import {MatDialogModule} from '@angular/material/dialog'



@NgModule({
  declarations: [
    DemoAngularComponent,
    TreeRightComponent,
    NavLeftComponent,
    PopupComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class DemoModule { }
