import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/Services/actions.service';


@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  selectedView = this.actionsService.getSelecView();

  constructor(private actionsService: ActionsService) { }

  ngOnInit() {
  }

  updateSelected() {
    this.actionsService.setSelecView(this.selectedView);
    this.actionsService.updateCurrent();
  }
}
