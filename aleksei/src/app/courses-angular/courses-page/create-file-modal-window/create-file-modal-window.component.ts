import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-file-modal-window',
  templateUrl: './create-file-modal-window.component.html',
  styleUrls: ['./create-file-modal-window.component.scss']
})
export class CreateFileModalWindowComponent implements OnInit {
  courseFormGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateFileModalWindowComponent>,) { }

  ngOnInit() {
    this.courseFormGroup = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl(''),
      duration: new FormControl(''),
      authors: new FormControl(''),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
