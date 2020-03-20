import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
  ]
})
export class MaterialModule {}
