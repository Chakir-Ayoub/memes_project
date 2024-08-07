import { MemesService } from './memes.service';
import { Component } from '@angular/core';
import { MemesModule } from './memes/memes.module';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { MemesformComponent } from './memesform/memesform.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memes_project';
  public loading=false;
  constructor(private memes_:MemesService ,private modalservice_:ModalService  ){}


  word:String;
  memes:MemesModule;

  Get_your_memes(word:String){
    this.loading=true;
    if(word){
      this.memes_.GetMemes(word).subscribe(meme=>{
        this.memes=meme;
       },error=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          footer: '<a href="#">Why do I have this issue?</a>'
        });
       });
    }
    else{
      this.memes_.GetRandomMemems().subscribe(meme=>{
        this.loading=false;
        this.memes=null;
        this.memes=meme;
       },error=>{
        this.loading=false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          footer: '<a href="#">Why do I have this issue?</a>'
        });
       });
    }


  }
    public openMemeModal(word:String){

      this.Get_your_memes(word);
      const modelref=this.modalservice_.show<MemesModule>(MemesformComponent,{
        title:'Author : '+this.memes.author,
        model:this.memes
        });
    }

}
