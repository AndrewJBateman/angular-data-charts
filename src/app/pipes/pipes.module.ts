import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DateConvertPipe } from "./date-convert.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [DateConvertPipe],
  exports: [DateConvertPipe],
})
export class PipesModule {}
