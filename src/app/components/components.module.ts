import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { PDFPanel } from './pd-panel/pd-panel.component'
import { Dialogue } from './dialogue/dialogue.component'

@NgModule({
  declarations: [NavigationLinks, PDFPanel, Dialogue],
  imports: [CommonModule, RouterModule],
  exports: [NavigationLinks, PDFPanel, Dialogue],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
