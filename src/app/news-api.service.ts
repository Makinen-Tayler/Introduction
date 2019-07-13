import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key = 'b0c6c08e303d45b2b3ccd1f7a7201cc8';

  constructor(private http: HttpClient) {}
  initSources(): any {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&country=us&apiKey=' +
        this.api_key
    );
  }
  initArticles(): any {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' +
        this.api_key
    );
  }
  getArticlesByID(source: String): any {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
