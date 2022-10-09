import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponentsModule } from "./modules/ui-components/ui-components.module";
import { ApiService } from "./shared/services/api.service";
import { LocalStorageService } from "./shared/services/local-storage.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    UiComponentsModule,
  ],
  providers: [
    {
      provide: 'IApiService',
      useClass: ApiService
    },
    {
      provide: 'ILocalStorageService',
      useClass: LocalStorageService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
