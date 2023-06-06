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
  @Input()
  SimplifiedChinese: string = '简体中文'
  @Input()
  Language: string = '语言'
  @Input()
  English: string = 'English'
  constructor() {}
}
