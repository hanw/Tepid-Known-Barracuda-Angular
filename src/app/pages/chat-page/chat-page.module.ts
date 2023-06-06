import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ChatPage } from './chat-page.component'

const routes = [
  {
    path: '',
    component: ChatPage,
  },
]

@NgModule({
  declarations: [ChatPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ChatPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChatPageModule {}
