import {Component, Input} from '@angular/core';
import {PopularTagType} from '../../../../types/popularTag.type';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent {
  @Input('tags') tagsProps: PopularTagType[];
}
