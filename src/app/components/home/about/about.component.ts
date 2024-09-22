import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  experienceTime: string = '';

  ngOnInit(): void {
  }

  calculateYearMonthDifference(): string {
    const startDate = new Date(2023, 1, 1);
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return `${years} years and ${months} months`;
  }
}
