import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { PDFPanel } from './pd-panel/pd-panel.component'
import { ChatPanel } from './chat-panel/chat-panel.component'

@NgModule({
  declarations: [NavigationLinks, PDFPanel, ChatPanel],
  imports: [CommonModule, RouterModule],
  exports: [NavigationLinks, PDFPanel, ChatPanel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
