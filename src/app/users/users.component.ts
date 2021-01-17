import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user = {Nom:"", Prenom:"", enfant:0};
  user0 = {Nom:"Souissi", Prenom:"malek", enfant:2};
  user1 = {Nom:"Dhrif", Prenom:"hedil", enfant:2};
  user2 = {Nom:"dimassi", Prenom:"Mehdi", enfant:2};
  users= [this.user0,this.user1,this.user2 ]
  opened=false
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor(
  
  ) {
  }
  ngOnInit(): void {
  }



  plusfun()
  {
    this.users.push(this.user);
    console.log(this.users);
  }
  toggleSidebar(){
    this.opened=!this.opened;
    this.change.emit(this.opened);
  }
}
