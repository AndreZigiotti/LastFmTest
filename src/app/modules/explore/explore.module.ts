import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { UiComponentsModule } from "../ui-components/ui-components.module";


@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
