import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuListService } from '../menu-list.service';
import { menuItems } from '../MenuList';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  MenuList = menuItems;
  selectedDish:any=[];


  constructor(private router:Router, private menuService:MenuListService) { }

  ngOnInit(): void {
  }

  onclick(dish:any){
    console.log(dish.target.value)
    this.selectedDish.push(dish.target.value)
   }
 
   getData(){
     this.menuService.menu=this.selectedDish;
     this.router.navigate(['selected-menu'])
   }

}
