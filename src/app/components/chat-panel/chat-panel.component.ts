import { Component, Input } from '@angular/core'

@Component({
  selector: 'chat-panel',
  templateUrl: 'chat-panel.component.html',
  styleUrls: ['chat-panel.component.css'],
})
export class ChatPanel {
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjg2MDMzNTAxfA&ixlib=rb-4.0.3&w=500'
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src1: string =
    'https://images.unsplash.com/photo-1685738538054-9953b5461dba?ixid=M3w5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY4NjAzMzUwMXw&ixlib=rb-4.0.3&w=500'
  @Input()
  image_alt1: string = 'image'
  @Input()
  image_src2: string =
    'https://images.unsplash.com/photo-1685725083464-26cab8f2da1e?ixid=M3w5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY4NjAzMzUwMXw&ixlib=rb-4.0.3&w=500'
  @Input()
  image_alt2: string = 'image'
  constructor() {}
}
