import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { UiComponentsModule } from "../ui-components/ui-components.module";


@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
