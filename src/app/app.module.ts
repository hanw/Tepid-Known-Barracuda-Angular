import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'sign-in-page',
    loadChildren: () =>
      import('./pages/sign-in-page/sign-in-page.module').then(
        (m) => m.SignInPageModule
      ),
  },
  {
    path: 'dialogue1',
    loadChildren: () =>
      import('./pages/dialogue1/dialogue1.module').then(
        (m) => m.Dialogue1Module
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'sign-up-page',
    loadChildren: () =>
      import('./pages/sign-up-page/sign-up-page.module').then(
        (m) => m.SignUpPageModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
