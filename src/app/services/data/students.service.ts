import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class StudentsService {
  students = [
    {
      id: 1
    }
  ];
  constructor() {}
  getStudents(ids?: string[] | number[]) {
    return Observable.from(
      ids
        ? this.students.filter((data: any) => (<any[]>ids).includes(data.id))
        : this.students
    );
  }
  getStudent(value: string | number, key: string = "id") {
    return this.getStudents().find(data => data[key] === value);
  }
}
