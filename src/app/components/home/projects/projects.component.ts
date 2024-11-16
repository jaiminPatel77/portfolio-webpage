import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  Projects = [
    {
      imgs:[
        '../../../../assets/images/projects/MERN-1.jpg',
        '../../../../assets/images/projects/MERN-3.jpg',
        '../../../../assets/images/projects/MERN-2.jpg',
        '../../../../assets/images/projects/MERN-4.jpg'],
      Title:'PeerHub',
      Description:'PeerHub is a fullstack social networking platform designed to connect users in a dynamic, interactive environment. Built with the MERN stack, it features user authentication and secure data management. Users can create profiles, upload images, and interact through comments and likes, simulating a modern social media experience.',
      Technologies:['MongoDB','Express.js' ,'RxJS', 'Node.js' , 'JWT'],
      // ghLink:'https://github.com/jaimineldin/medmatch',
      // demoLink:'https://medmatchh.netlify.app/'
    },

  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
