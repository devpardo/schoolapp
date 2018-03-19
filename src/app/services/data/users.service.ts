import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UsersService {
  users = [
    {
      id: 1,
      email: "ralph@mail.com",
      password: "ralph",
      name: {
        first: "Ralph Christian",
        middle: "Ditablan",
        last: "Eclipse"
      },
      birthday: "12/19/1995",
      phoneNo: 1234567890,
      address: {
        block: 341,
        street: "Bagong Nayon",
        city: "Binangonan",
        province: "Rizal",
        zipCode: 1941
      },
      isMale: true,
      role: "student"
    },
    {
      id: 2,
      email: "bryan@mail.com",
      password: "bryan",
      name: {
        first: "bryan",
        middle: "bryan",
        last: "bryan"
      },
      birthday: "12/19/1995",
      phoneNo: 1234567890,
      address: {
        block: 341,
        street: "Bagong Nayon",
        city: "Binangonan",
        province: "Rizal",
        zipCode: 1941
      },
      isMale: true,
      role: "teacher"
    },
    {
      id: 3,
      image:
        "https://scontent.fmnl6-1.fna.fbcdn.net/v/t31.0-8/477597_10150879126872986_1945926737_o.jpg?oh=4609ecaed7f0e82ebc55d39b1c8e9cca&oe=5B448285",
      email: "gino@mail.com",
      password: "gino",
      name: {
        first: "gino",
        middle: "gino",
        last: "gino"
      },
      birthday: "12/19/1995",
      phoneNo: 1234567890,
      address: {
        block: 341,
        street: "Bagong Nayon",
        city: "Binangonan",
        province: "Rizal",
        zipCode: 1941
      },
      isMale: true,
      role: "parent"
    }
  ];
  constructor() {}
  getUsers(ids?: string[] | number[]) {
    return ids
      ? this.users.filter((user: any) => (ids as any).includes(user.id))
      : this.users;
  }
  getUser(value: string | number, key: string = "id") {
    return this.getUsers().find(data => data[key] === value);
  }
  getUserByEmail(email: string) {
    return this.getUser(email, "email");
  }
  getUserInfo(id: string | number) {
    return fetch(`http://stpcentral.net/sprofile/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }
}
