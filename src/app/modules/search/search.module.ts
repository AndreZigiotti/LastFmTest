import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { UiComponentsModule } from "../ui-components/ui-components.module";


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    UiComponentsModule
  ]
})
export class SearchModule { }
