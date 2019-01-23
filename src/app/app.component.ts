import { Component } from '@angular/core';
import { HttpService} from './http.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  user: User = new User();
    receivedUser: User;
    done = false;
    constructor(private httpService: HttpService) {}
    submit(user: User) {
        this.httpService.postData(user)
                .subscribe(
                    (data: User) => {this.receivedUser = data; this.done = true; },
                    error => console.log(error)
                );
    }
}
