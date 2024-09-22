import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jaimin-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
   
  ) {
  }
  ngOnInit(): void {

   

    this.titleService.setTitle("Jaimin Patel| Front-end Developer  | Software Developer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend , Software Engineer, software, Developer' },
      { name: 'description', content: 'As a software engineer with expertise in Frontend, I have a comprehensive understanding of Frontend web development. My strong foundation in TypeScript allows me to effectively work with front-end technologies such as Angular.' },
    ]);
    
    AOS.init();


  }
}
