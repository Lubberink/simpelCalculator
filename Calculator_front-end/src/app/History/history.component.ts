import {Component, Injectable, Input} from "@angular/core";
import {NgForm} from "@angular/forms";
import {CalculatorService} from "../Calculator/calculator.service";
import {HistoryService} from "./history.service";

@Component({
  selector: 'history',
  templateUrl: './history.component.html'
})

export class HistoryComponent{
  pageTitle : string = "Berekeningen gedaan in het verleden"

  @Input() historyCalculations: any[] = [];

  constructor(private historyService: HistoryService) {
    this.getResult();
  }

  getResult() {
    this.historyService.getResult().subscribe({
      next: result => this.historyCalculations = result,
    })
  }
}
