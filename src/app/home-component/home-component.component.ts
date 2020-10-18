import { Component, OnInit } from '@angular/core';
import faker from 'faker';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {
  image = faker.image.avatar();
  width = "100%";
  //height = 200;
  type = "msspline";
  dataFormat = "json";
  dataSource = data;

  constructor() { 
  }
    ngOnInit(): void {
    }

}
const data = {
  chart: {

    numdivlines: "3",
    showvalues: "0",
    legenditemfontsize: "15",
    legenditemfontbold: "1",
    
    plottooltext: `<div class="card"  style="background-color: lightblue; width:100%; height:100%">
                    <div class="card-header">
                    <div class="row">
                      <div col-sm-6>
                        EUR/USD
                      </div>
                      <div col-sm-6 style="position: relative">
                        ...
                      </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <b>$dataValue</b><br /> Tickets $seriesName on $label
                    </div>
                    </div>`,
    theme: "fusion",
    toolTipBgColor: "#00134d",
    toolTipBgAlpha: "80",
    showToolTipShadow: "1"
  },
  categories: [
    {
      category: [
        {
          label: "Jan"
        },
        {
          label: "Feb"
        },
        {
          label: "Mar"
        },
        {
          label: "Apr"
        },
        {
          label: "May"
        },
        {
          label: "Jun"
        },
        {
          label: "Jul"
        },
        {
          label: "Aug"
        },
        {
          label: "Sep"
        },
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Received",
      data: [
        {
          value: "1.1444"        },
        {
          value: "1.2023"
        },
        {
          value: "1.0345"
        },
        {
          value: "1.30"
        },
        {
          value: "1.2453"
        },
        {
          value: "1.1567"
        },
        {
          value: "1.0432"
        },
        {
          value: "1.2675"
        },
        {
          value: "1.0982"
        },
        {
          value: "1.1532"
        },
        {
          value: "1.2165"
        },
        {
          value: "1.0986"
        },
        {
          value: "1.2133"
        },
        {
          value: "1.2230"
        }
      ]
    }    
  ]
};
 