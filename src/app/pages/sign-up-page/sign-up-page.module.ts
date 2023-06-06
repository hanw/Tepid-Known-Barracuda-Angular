import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SignUpPage } from './sign-up-page.component'

const routes = [
  {
    path: '',
    component: SignUpPage,
  },
]

@NgModule({
  declarations: [SignUpPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SignUpPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignUpPageModule {}
