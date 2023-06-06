import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { AppComponent } from './component/component.component'

@NgModule({
  declarations: [NavigationLinks, AppComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationLinks, AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
