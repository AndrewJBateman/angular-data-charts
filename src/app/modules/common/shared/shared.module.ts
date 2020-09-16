import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, MaterialModule, PipesModule],
})
export class SharedModule {}
