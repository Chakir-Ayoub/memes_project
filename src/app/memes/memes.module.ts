import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MemesModule {
 public postLink:String;
 public subreddit:String;
 public title:String;
 public url:String;
 public nsfw:boolean;
 public spoiler:boolean;
 public author:String;
 public ups:Number;
 public preview:String[];
}
