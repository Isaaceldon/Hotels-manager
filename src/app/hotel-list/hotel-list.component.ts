import { Component } from '@angular/core';
import { IHotel } from './hotel';



@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
})
export class HotelListComponent {
  public title = 'List of Hotels';
  public hotels: IHotel[] = [
    {
      hotelId: 1,
      name: "Eldon's Hotel",
      price:50000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      imgUrl: 'assets/img/hotel1.jpg',
    },
    {
      hotelId: 2,
      name: "Eldon's Hotel",
      price:50000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      imgUrl: 'assets/img/hotel2.jpg',
    },
    {
      hotelId: 3,
      name: "Eldon's Hotel",
      price:50000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      imgUrl: 'assets/img/hotel3.jpg',
    },
    {
      hotelId: 4,
      name: "Eldon's Hotel",
      price:50000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      imgUrl: 'assets/img/hotel4.jpg',
    },
    {
      hotelId: 5,
      name: "Eldon's Hotel",
      price:50000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      imgUrl: '../../assets/img/hotel5.jpg',
    },
    {
      hotelId: 6,
      name: "Eldon's Hotel",
      price:50000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      imgUrl: '../../assets/img/hotel6.jpg',
    },
  ];

  public showBadge: boolean = false;

  public hotelFilter = "mot";

  /**
   * toggleViewNews
   */
  public toggleViewNews(): void {
    this.showBadge = !this.showBadge;
  }
}
