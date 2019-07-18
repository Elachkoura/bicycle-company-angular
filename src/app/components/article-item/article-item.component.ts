import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() img = '';
  @Input() title = '';
  @Input() desc = '';
  @Input() author = '';
  @Input() authorPic = '';
  @Input() date = '';
  @Input() commentCount = 0;

  constructor() { }

  ngOnInit() {
  }

}
