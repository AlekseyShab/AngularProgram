import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseItem } from '../courses-page/models/typescript-course.model';

@Component({
  selector: 'app-header',
  template: '',
})
export class HeaderStubComponent {
}

@Component({
  selector: 'app-breadcrumbs',
  template: '',
})
export class BreadcrumbsStubComponent {
}

@Component({
  selector: 'app-search-btn',
  template: '',
})
export class SearchBtnStubComponent {

}

@Component({
  selector: 'app-footer',
  template: '',
})
export class FooterStubComponent {

}

@Component({
  selector: 'app-edit-btn',
  template: '',
})
export class EditBtnStubComponent {

}

@Component({
  selector: 'app-item',
  template: '',
})
export class ItemStubComponent {
  @Input() info: CourseItem;
  @Output() deleteElement: EventEmitter<number> = new EventEmitter();
}

@Component({
  selector: 'app-delete-btn',
  template: ''
})
export class DeleteBtnStubComponent {

}

@Component({
  selector: 'app-add-btn',
  template: '',
})
export class AddBtnStubComponent {

}

@Component({
  selector: 'app-list',
  template: '',
})
export class ListStubComponent {

}

@Component({
  selector: 'app-section',
  template: '',
})
export class SectionStubComponent {

}

@Component({
  selector: 'app-load-more',
  template: '',
})
export class LoadMoreStubComponent {

}
