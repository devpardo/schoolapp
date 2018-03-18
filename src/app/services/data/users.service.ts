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
    return Observable.from(
      ids
        ? this.users.filter((data: any) => (<any[]>ids).includes(data.id))
        : this.users
    );
  }
  getUser(value: string | number, key: string = "id") {
    return this.getUsers().find(data => data[key] === value);
  }
  getUserByEmail(email: string) {
    return this.getUser(email, "email");
  }
}
