import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  
  uid:number;
  user:Observable<User>

  constructor(private _userService:UserService)
  {}

  search()
  {
    this.user=this._userService.searchUser(this.uid);

  }
  ngOnInit(): void {
  }

}
