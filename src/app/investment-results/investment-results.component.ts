import { Component, Input } from '@angular/core';
import { AnnualData } from '../investment-results.model';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() data!: AnnualData[];
}
