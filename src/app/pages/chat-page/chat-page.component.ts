import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'chat-page',
  templateUrl: 'chat-page.component.html',
  styleUrls: ['chat-page.component.css'],
})
export class ChatPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ChatPage - Tepid Known Barracuda')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ChatPage - Tepid Known Barracuda',
      },
    ])
  }
}
