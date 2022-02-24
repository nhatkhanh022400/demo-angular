import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { TreeRightComponent } from './components/tree-right/tree-right.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLeftComponent,
    TreeRightComponent,
    PopupComponent
  ],
  imports: [

    FormsModule,

    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
