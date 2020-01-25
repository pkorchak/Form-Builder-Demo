import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditorComponent } from './form-editor.component';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzIconModule,
  NzInputModule,
  NzSelectModule,
  NzToolTipModule
} from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { EditableLabelComponent } from '@widgets/form-editor/label/editable-label.component';
import { EditableFormElementComponent } from './element/editable-form-element.component';
import { InputMockupComponent } from '@widgets/form-editor/element/mockups/input-mockup.component';
import { DatePickerMockupComponent } from '@widgets/form-editor/element/mockups/date-picker-mockup.component';
import { ElementTypeSelectComponent } from './element/type-select/element-type-select.component';
import { CheckboxMockupComponent } from '@widgets/form-editor/element/mockups/checkbox-mockup.component';
import { SettingsDrawerComponent } from './settings-drawer/settings-drawer.component';
import { FormContainerModule } from '@widgets/form-container/form-container.module';

const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzIconModule,
  NzInputModule,
  NzSelectModule,
  NzToolTipModule
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN_MODULES,
    ReactiveFormsModule,
    FormContainerModule
  ],
  declarations: [
    FormEditorComponent,
    EditableLabelComponent,
    EditableFormElementComponent,
    InputMockupComponent,
    CheckboxMockupComponent,
    DatePickerMockupComponent,
    ElementTypeSelectComponent,
    SettingsDrawerComponent
  ],
  exports: [FormEditorComponent]
})
export class FormEditorModule {
}
