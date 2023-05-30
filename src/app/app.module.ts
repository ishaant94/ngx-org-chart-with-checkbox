import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgxOrgChartModule } from 'ngx-org-chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxOrgChartModule } from 'projects/ngx-org-chart/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
