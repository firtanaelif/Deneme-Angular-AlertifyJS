import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers:Customer[]=[]
  selectedCustomer:Customer;
  @Input() city:string;
  ngOnInit() {
    this.customers=[
      {id:1,firstName:"elif",lastName:"fırtana",age:18},
      {id:1,firstName:"sude",lastName:"fırtana",age:17},
      {id:1,firstName:"melek",lastName:"fırtana",age:39},
      {id:1,firstName:"ömer",lastName:"fırtana",age:40}

    ]
  }
selectCustomer(customer:Customer){
  this.selectedCustomer=customer;
}
}
