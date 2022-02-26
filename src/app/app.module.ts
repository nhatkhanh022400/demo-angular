import { AllMdModule } from './all-article/all-md/all-md.module';
import { ArticalDetailModule } from './article-detail-all/artical-detail-md/artical-detail.module';
import { DemoModule } from './components/demo/demo.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    DemoModule,
    AllMdModule,
    BrowserModule,
    AppRoutingModule,
    ArticalDetailModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
