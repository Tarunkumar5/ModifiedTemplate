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
  topheadlinesUs : Array<any>;
  headlinesUs : Array<any>;
  businessNews : Array<any>;
  businessList : Array<any>;
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
    
    this.newsService.topheadlinesUs().subscribe(response=>{
      if(response){
        this.topheadlinesUs = response['articles'];
        this.headlinesUs = this.topheadlinesUs.slice(0,10);
      }
    })

    this.newsService.businessNews().subscribe(response=>{
      if(response){
        this.businessNews = response['articles'];
        this.businessList = this.businessNews.slice(0,2);
      }
    })
}}
