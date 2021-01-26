import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {
  key : string;
  constructor(private httpClient : HttpClient) { 
    this.key = "27cbf925ff5743fb89cbdf4722baa76e";
  }

  cnnNews() : Observable<Array<any>>
  {
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?sources=cnn-news&apiKey="+this.key);
  }

  readNews() : Observable<Array<any>>
  {
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&apiKey="+this.key);
  }
  
  businessNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey="+this.key);
  }

  entertainmentNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey="+this.key);
  }

  generalNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey="+this.key);
  }

  healthNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey="+this.key);
  }

  scienceNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey="+this.key);
  }

  sportsNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey="+this.key);
  }
  
  technologyNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey="+this.key);
  }
  bbcNews() : Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey="+this.key);
  }
  topheadlinesUs():   Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&apiKey="+this.key);
  }
  mostpopular():   Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/everything?q=popular&apiKey="+this.key);
  }
  mostrecent():   Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/everything?q=recent&apiKey="+this.key);
  }
 
  addNews(news : any) : Observable<any>
  { 
    alert(news);
  // return this.httpClient.post<any>("http://localhost:3000/sources",news);
   return this.httpClient.post<any>("http://localhost:9090/api/v1/news/addNews",news);
  }

}
