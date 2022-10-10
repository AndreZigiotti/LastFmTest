import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from "./shared/interceptors/api.interceptor";
import { UiComponentsModule } from "./modules/ui-components/ui-components.module";
import { ApiService } from "./shared/services/api.service";
import { LocalStorageService } from "./shared/services/local-storage.service";
import { SearchHistoryService } from "./shared/services/search-history.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiComponentsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    {
      provide: 'IApiService',
      useClass: ApiService
    },
    {
      provide: 'ILocalStorageService',
      useClass: LocalStorageService
    },
    {
      provide: 'ISearchHistoryService',
      useClass: SearchHistoryService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
