import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-contentbody',
  templateUrl: './contentbody.component.html',
  styleUrls: ['./contentbody.component.css']
})
export class ContentbodyComponent implements OnInit {

  newList : Array<any>;
  imageList : Array<any>;
  bbcNews : Array<any>;
  bbcList : Array<any>;
  constructor(private newsService : NewsService)
  {}
  ngOnInit()
  {
     this.newsService.readNews().subscribe(response=>{
       if(response)
       {
         this.newList=response['articles'];
         //this.imageList = this.newList['urlToImage'].slice(0,3);
         console.log(this.newList);
       }
     },error=>{})

     this.newsService.bbcNews().subscribe(response=>{
       if(response){
         this.bbcNews=response['articles'];
          this.bbcList = this.bbcNews.slice(0,4);
       }
     })
    }
}
