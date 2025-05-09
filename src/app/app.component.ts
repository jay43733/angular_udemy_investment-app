import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AnnualData } from './app.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  initial: number = 0;
  annual: number = 0;
  expected: number = 0;
  duration: number = 0;
  annualData: AnnualData[] = [];

  calculateInvestmentResults(result: AnnualData[]) {
    this.annualData = result;
  }
}
