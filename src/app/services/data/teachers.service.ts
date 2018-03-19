import { Injectable } from "@angular/core";

@Injectable()
export class TeachersService {
  teachers = [
    {
      id: 1,
      students: [1]
    }
  ];
  constructor() {}

  async getTeachers(grade: string, section: string) {
    return fetch(`http://stpcentral.net/teachers/${grade}-${section}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }
  getTeacherInfo(id: string | number) {
    return fetch(`http://stpcentral.net/tprofile/${id}`).then(res =>
      res.json()
    );
  }
}
