import { Injectable } from "@angular/core";

@Injectable()
export class AssignmentsService {
  constructor() {}

  async getCurrentDayAssignments(grade: string, section: string) {
    return fetch(`http://stpcentral.net/assignments/${grade}-${section}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }
  async getAssignmentsByDate(grade: string, section: string, date: string) {
    return fetch(
      `http://stpcentral.net/assignments/${grade}-${section}/${date}`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(res => res.json());
  }
}
