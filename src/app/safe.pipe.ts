import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(videoPath: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
  }
}
