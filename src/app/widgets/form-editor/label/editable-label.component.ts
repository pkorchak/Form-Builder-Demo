import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableLabelComponent {

  @Input() parentFormControl: FormControl;
  @Input() options: EditableLabelOptions = {};

  @ViewChild('input', {static: true}) input: ElementRef;

  selectInputContent($event) {
    $event.target.select();
  }

  public focusOnInput() {
    this.input.nativeElement.focus();
  }

}

export interface EditableLabelOptions {
  color?: string;
  height?: string;
  fontSize?: string;
  borderBottomColor?: string;
}
