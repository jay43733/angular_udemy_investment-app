import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AnnualData } from './app.model';
import { InvestmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {}
