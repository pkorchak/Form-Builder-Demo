import { NgModule } from '@angular/core';
import { NZ_ICONS } from 'ng-zorro-antd';

import {
  ArrowLeftOutline,
  ContainerOutline,
  DashboardOutline,
  DeleteTwoTone,
  ExclamationCircleOutline,
  EyeOutline,
  FormOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  PlusCircleTwoTone
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  ContainerOutline,
  ArrowLeftOutline,
  EyeOutline,
  DeleteTwoTone,
  PlusCircleTwoTone,
  ExclamationCircleOutline
];

@NgModule({
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ]
})
export class IconsProviderModule {
}
