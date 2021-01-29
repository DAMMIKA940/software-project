import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Pastpaper } from "src/app/models/Pastpaper";

import { PaperService } from 'src/app/services/paper.service';

@Component({
  selector: 'app-paper-upload',
  templateUrl: './paper-upload.component.html',
  styleUrls: ['./paper-upload.component.css']
})
export class PaperUploadComponent implements OnInit {
  form: FormGroup;
  pastpaper: Pastpaper;
  pastpaperData: string;

  constructor(private pastpaperService: PaperService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      pastpaper: new FormControl(null),
    });
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ pastpaper: file });
    const allowedMimeTypes = ["application/pdf"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pastpaperData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.pastpaperService.addPastpaper(this.form.value.name, this.form.value.pastpaper);
    this.form.reset();
    this.pastpaperData = null;
  }


}



















