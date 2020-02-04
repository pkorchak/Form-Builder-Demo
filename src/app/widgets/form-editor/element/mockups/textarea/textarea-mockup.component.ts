import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea-mockup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<textarea nz-input
                       style="resize: none"
                       rows="3"
                       [formControl]="placeholderFormControl">
  </textarea>`
})
export class TextareaMockupComponent {

  @Input() placeholderFormControl: FormControl;

}
