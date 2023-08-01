import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details1',
  templateUrl: './details1.page.html',
  styleUrls: ['./details1.page.scss'],
})
export class Details1Page implements OnInit {
  products = [
    {
      
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit,',
      location: 'Lorem ipsum',
      imageUrl: '/assets/images/img.png',
    },
    // {
       
    //   description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit,',
    //   location: 'Lorem ipsum',
    //   imageUrl: 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
    // },
    // {
       
    //   description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit,',
    //   location: 'Lorem ipsum',
    //   imageUrl: 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
    // },
    // Add more product items here as needed
  ];
  constructor() { }

  ngOnInit() {
  }

}
