import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SignInPage } from './sign-in-page.component'

const routes = [
  {
    path: '',
    component: SignInPage,
  },
]

@NgModule({
  declarations: [SignInPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SignInPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignInPageModule {}
