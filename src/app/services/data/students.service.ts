import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class StudentsService {
  students = [
    {
      id: 1,
      grade: 1,
      teachers: [1, 2, 3],
      parents: {
        mother: 1,
        father: 1
      },
      guardians: [2, 3]
    }
  ];
  constructor() {}
  // getStudents(ids?: string[] | number[]) {
  //   return Observable.from(
  //     ids
  //       ? this.students.filter((data: any) => (<any[]>ids).includes(data.id))
  //       : this.students
  //   );
  // }
  // getStudent(value: string | number, key: string = "id") {
  //   return this.getStudents().find(data => data[key] === value);
  // }
  getStudents() {
    return this.students;
  }
  getStudent(value: string | number, key: string = "id") {
    return this.getStudents().find(data => data[key] === value);
  }

  getStudentInfo(id: string | number) {
    return fetch(`http://stpcentral.net/sprofile/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }

  async getClassmates(grade: string, section: string) {
    return fetch(`http://stpcentral.net/students/${grade}-${section}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }
}
