import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-dialogue',
  templateUrl: 'dialogue.component.html',
  styleUrls: ['dialogue.component.css'],
})
export class Dialogue {
  @Input()
  text: string = '示例问题：'
  @Input()
  button: string = 'Button'
  constructor() {}
}
