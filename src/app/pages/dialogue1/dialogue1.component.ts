import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-dialogue1',
  templateUrl: 'dialogue1.component.html',
  styleUrls: ['dialogue1.component.css'],
})
export class Dialogue1 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Dialogue1 - Tepid Known Barracuda')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Dialogue1 - Tepid Known Barracuda',
      },
    ])
  }
}
