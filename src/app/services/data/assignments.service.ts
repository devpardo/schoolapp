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
}
