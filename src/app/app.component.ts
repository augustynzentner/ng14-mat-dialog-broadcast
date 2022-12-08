import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'multi-tab-dialog';

  constructor(private commonService: CommonService) {}

  openDialog() {
    this.commonService.openDialog();
  }
}
