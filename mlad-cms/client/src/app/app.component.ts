import { Component, ViewEncapsulation } from '@angular/core';


// TODO: Will I need to keep the global "styles.css" file ? If not - delete the file as well
// import '../../public/css/styles.css';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.styles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    
    sex() {
      console.log('Delete this function :)');
    }

}
