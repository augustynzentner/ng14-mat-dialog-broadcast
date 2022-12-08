import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  channel = new BroadcastChannel('myChannel');

  constructor(private dialog: MatDialog) {
    this.channel.onmessage = (ev) => {
      this.openDialog();
    };
  }

  openDialog() {
    this.dialog
      .open(MyDialogComponent)
      .afterClosed()
      .subscribe((_) => {
        console.log('=== CLOSED DIALOG ===');
        this.channel.postMessage(null);
      });
  }
}
