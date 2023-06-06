import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Dialogue1 } from './dialogue1.component'

const routes = [
  {
    path: '',
    component: Dialogue1,
  },
]

@NgModule({
  declarations: [Dialogue1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Dialogue1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Dialogue1Module {}
