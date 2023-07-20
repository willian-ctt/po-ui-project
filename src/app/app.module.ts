import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoComponentsModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PoTemplatesModule,
    PoComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
