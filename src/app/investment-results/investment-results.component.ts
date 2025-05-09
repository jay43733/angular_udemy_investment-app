import { Component, Input } from '@angular/core';
import { AnnualData } from '../app.model';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentResultsService: InvestmentResultsService) {}

  get data() {
    return this.investmentResultsService.result;
  }
}
