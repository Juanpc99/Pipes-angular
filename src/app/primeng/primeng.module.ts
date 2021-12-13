import { NgModule } from '@angular/core';
//Prime ng
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule
  ]
})
export class PrimengModule { }
