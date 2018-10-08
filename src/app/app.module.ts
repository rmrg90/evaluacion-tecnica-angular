import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateFormComponent } from './form/create-form/create-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {LocationServiceService} from './services/location-service.service';
import {HttpClientModule} from '@angular/common/http';
import {TextMaskModule} from 'angular2-text-mask';
import { BannerComponent } from './form/banner/banner.component';
import { ModalComponent } from './form/modal/modal.component';
import { FormSuccessComponent } from './form/form-success/form-success.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    BannerComponent,
    ModalComponent,
    FormSuccessComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    TextMaskModule
  ],
  providers: [LocationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
