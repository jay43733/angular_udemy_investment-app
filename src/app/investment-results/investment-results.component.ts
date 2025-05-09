import { Component, computed, Input } from '@angular/core';
import { AnnualData } from '../investment-results.model';
import { investmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentResultsService: investmentResultsService) {}

  data = computed(() => this.investmentResultsService.result());
}
