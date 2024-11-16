import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  Projects = [
    {
     image:'assets/images/Certificate/MERN.jpg',
      Title:'MERN Stack',
      Description:'',
      Technologies:['MongoDb','Express.js','React.js' , 'Node.js','JWT'],
      // ghLink:'https://github.com/jaimineldin/quizz-app',
      // demoLink:'https://quizzzz-app-js.netlify.app/'
    },


    {
      image:'assets/images/Certificate/Advance-react.jpg',
      Title:'Advanced React',
      Description:'',
      Technologies:['React.js','Javascript','Node.js'],
      // ghLink:'https://github.com/jaimineldin/techivo',
      // demoLink:'https://techivo.netlify.app/'
    }

  ]

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }
}
