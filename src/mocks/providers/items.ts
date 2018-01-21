import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Exercise",
    "profilePic": "assets/img/habit_ic/weights.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Fix Your Posture",
        "profilePic": "assets/img/habit_icons/situp.png",
        "about": "Good posture is the key to solid back health."
      },
      {
        "name": "Drink Water",
        "profilePic": "assets/img/habit_icons/water.jpg",
        "about": "Stay Hydrated!"
      },
      {
        "name": "Run a mile",
        "profilePic": "assets/img/habit_icons/running.jpg",
        "about": "Those chips aren't gonna burn themselves."
      },
      {
        "name": "Study for half an hour",
        "profilePic": "assets/img/habit_icons/studying.jpg",
        "about": "Gotta Ace that midtem. I believe in you!."
      },
      {
        "name": "Drop and Gimme 20",
        "profilePic": "assets/img/habit_icons/pushups.jpg",
        "about": "Tis will make you healthy and strong"
      },
      {
        "name": "Walk your doge!",
        "profilePic": "assets/img/habit_icons/dog.jpg",
        "about": "Better for you and him, but mostly for him."
      }

    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
