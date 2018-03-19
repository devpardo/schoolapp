import { Injectable } from "@angular/core";

@Injectable()
export class SubjectsService {
  constructor() {}

  async getSubjects(grade: string, section: string) {
    return fetch(
      `http://stpcentral.net/subjects/sidemenu/${grade}-${section}`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(res => res.json());
  }

  async getSubjectAssignments(subject: string, grade: string, section: string) {
    return fetch(
      `http://stpcentral.net/assignments/subject/${subject}/${grade}-${section}`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(res => res.json());
  }
}
