import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sign-up-page',
  templateUrl: 'sign-up-page.component.html',
  styleUrls: ['sign-up-page.component.css'],
})
export class SignUpPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SignUpPage - Tepid Known Barracuda')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'SignUpPage - Tepid Known Barracuda',
      },
    ])
  }
}
