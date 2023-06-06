import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sign-in-page',
  templateUrl: 'sign-in-page.component.html',
  styleUrls: ['sign-in-page.component.css'],
})
export class SignInPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SignInPage - Tepid Known Barracuda')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'SignInPage - Tepid Known Barracuda',
      },
    ])
  }
}
