import { HighlightBorderDirective } from './highlightborder.directive';
import { ElementRef } from '@angular/core';

describe('HighlightBorderDirective', () => {
  it('should create an instance', () => {
    let elRef: ElementRef;
    const directive = new HighlightBorderDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
