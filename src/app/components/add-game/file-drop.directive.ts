import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[fileDrop]'
})
export class FileDropDirective {

  @Output()
  fileDropped = new EventEmitter<FileList>();

  @Output()
  isDropZoneHovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop(event: any){
    event.preventDefault();

    let transfer = event.dataTransfer;
    this.fileDropped.emit(transfer.files);
  }

  @HostListener('dragover', ['$event'])
  onDragHover(event: Event){
    event.preventDefault();
    this.isDropZoneHovered.emit(true)
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: Event){
    event.preventDefault();
    this.isDropZoneHovered.emit(false)
  }

}
