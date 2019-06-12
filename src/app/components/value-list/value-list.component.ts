import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../services/values.service';
import { IIndexedValue } from '../../interfaces/IIndexedValue.interface';

@Component({
  selector: 'app-value-list',
  templateUrl: './value-list.component.html',
  styleUrls: ['./value-list.component.css']
})
export class ValueListComponent implements OnInit {

  values: IIndexedValue[];

  constructor(private vs: ValueService) {      
    vs.getValues().subscribe(values => this.values = values);
  }

  ngOnInit() {
  }

}
