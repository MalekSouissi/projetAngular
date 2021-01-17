import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users= [1 , 4 , 7 ]
  opened=false
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  ;
  constructor(
  
  ) {
  }
  ngOnInit(): void {
  }



  plusfun()
  {
    this.users.push();
    console.log(this.users);
  }
  toggleSidebar(){
    this.opened=!this.opened;
    this.change.emit(this.opened);
  }
}
