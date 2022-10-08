import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from "@angular/router";
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { PanelComponent } from './components/panel/panel.component';
import { AnchorComponent } from './components/anchor/anchor.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';



@NgModule({
  declarations: [
    SidenavComponent,
    NavItemComponent,
    PanelComponent,
    AnchorComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    SidenavComponent,
    PanelComponent,
    AnchorComponent
  ]
})
export class UiComponentsModule { }
