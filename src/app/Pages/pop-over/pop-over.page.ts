import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/Services/actions.service';


@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  srtBy = this.actionsService.getSrt();

  constructor(private actionsService: ActionsService) { }

  ngOnInit() {
  }

  updateSrtBy() {
    this.actionsService.setSrt(this.srtBy);
  }
}
