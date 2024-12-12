import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Experience',
      Icon: 'assets/images/icons/job.png',
      Title: 'Job',
      board: 'Confidosoft solutions Pvt. Ltd',
      Date: 'Jun 2023 –  Present',
      Description: [
        "Currently employed at Confidosoft Solutions Pvt. Ltd, actively engaged in an Angular live project focusing on Enterprise Service Bus implementation.",
        "Utilizing expertise in Angular to develop scalable and efficient solutions, contributing to the success of the project.",
        "Collaborating with cross-functional teams to integrate Enterprise Service Bus functionalities seamlessly into the project architecture."
      ]
    },
    {
      Tab: 'Internship',
      Icon: 'assets/images/icons/internship.png',
      Title: 'Internship',
      board: 'Confidosoft solutions Pvt. Ltd',
      Date: 'Jan 2023 –  April 2023',
      Description: [
        "Interned at Confidosoft Solutions Pvt. Ltd, where I undertook a project involving the upgrade of Angular project version from Angular 10 to Angular 14.",
        "Acquired practical experience in Angular framework through hands-on implementation and troubleshooting.",
        "Contributed to enhancing project efficiency and staying current with the latest Angular advancements."
      ]
    },
    {
      Tab: 'College',
      Icon: 'assets/images/icons/university.png',
      Title: 'Bachelor of Engineering in IT',
      board :'Gujarat Technological University',
      Date: 'Jun 2029 - May 2023',
      Description: [
        "Successfully completed a Bachelor of Engineering in Information Technology from Gujarat Technological University.",
        "Achieved an outstanding CGPA of 8.56 (First Division with Distinction), reflecting dedication and excellence in academic performance.",
        "Developed a strong foundation in different subjects including the University Problem Solving",
      ]
    },
    {
      Tab: 'School',
      Icon: 'assets/images/icons/school.png',
      Title: 'SSC | HSC',
      board :'GSEB board',
      Date: '',
      Description: [
        "Completed 10th grade at Narayan Vidhyalaya with a commendable achievement, scoring 80%.",
        "Continued academic excellence through 12th grade at Narayan Vidhyalaya, maintaining a strong performance with a score of 77%."
      ]
    }
  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
