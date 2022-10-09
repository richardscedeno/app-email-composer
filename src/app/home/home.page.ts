import { Component } from '@angular/core';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private emailComposer: EmailComposer) {}

  enviar(){
    //console.log("enviado");
    let email = {
      to: 'jose.cedenovillon@gmail.com',
      cc: '',
      bcc: [],
      attachments: [],
      subject: 'Email Composer',
      body: 'El email ha sido enviado con éxito!',
      isHtml: true,
      app: "gmail"
    }
  
    this.emailComposer.open(email);
    //console.log(email);
    //alert("Email Enviado");
  }

}
