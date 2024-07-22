import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemesModule } from './memes/memes.module';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(private http_:HttpClient) { }

  GetMemes(word:String):Observable<MemesModule>{
    return this.http_.get<MemesModule>('https://meme-api.com/gimme/'+word);
  }

  GetRandomMemems():Observable<MemesModule>{
    return this.http_.get<MemesModule>('https://meme-api.com/gimme');
  }
}
