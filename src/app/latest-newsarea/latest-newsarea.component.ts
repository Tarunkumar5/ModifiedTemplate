import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-latest-newsarea',
  templateUrl: './latest-newsarea.component.html',
  styleUrls: ['./latest-newsarea.component.css']
})
export class LatestNewsareaComponent implements OnInit {
  newList : Array<any>;
  constructor(private newsService : NewsService)
  {}
  ngOnInit()
  {
     this.newsService.readNews().subscribe(response=>{
       if(response)
       {
         this.newList=response['articles'];
       }
     },error=>{})
  }


}
