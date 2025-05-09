import { Component, signal } from '@angular/core';

import { AnnualData } from './investment-results.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  annualData = signal<AnnualData[]>([]);

  calculateInvestmentResults(result: AnnualData[]) {
    this.annualData.set(result);
  }
}
