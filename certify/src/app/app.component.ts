import { Component } from '@angular/core';
import { AppService } from './app.service';
import * as shajs from 'sha.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 constructor(private exampleService: AppService){}	
  title = 'certify';

  onSubmit(value: any) {
    console.log(value);
    var hash=shajs('sha256').update(value.name).digest('hex');
    console.log("Hash",hash);
    this.exampleService.createstamp(hash).subscribe(data => {

    console.log("Data received",data);

    });

  }
}
