import { ModalService } from 'angular-modal-service';
import { Component } from '@angular/core';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { MemesModule } from '../memes/memes.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-memesform',
  templateUrl: './memesform.component.html',
  styleUrls: ['./memesform.component.css']
})
export class MemesformComponent {
  memes_:MemesModule;
  constructor( private readonly __modalReference:ModalReference<MemesModule>){
    if(this.__modalReference.config.model){
      this.memes_=this.__modalReference.config.model;
    }
  }
}
