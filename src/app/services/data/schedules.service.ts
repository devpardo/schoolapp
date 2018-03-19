import { Injectable } from "@angular/core";

@Injectable()
export class SchedulesService {
  constructor() {}

  async getCurrentDaySchedules(grade: string, section: string) {
    return fetch(`http://stpcentral.net/sched/${grade}-${section}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }
  async getSchedulesByDate(grade: string, section: string, date: string) {
    return fetch(`http://stpcentral.net/sched/${grade}-${section}/${date}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }

  async getAllSchedules(grade: string, section: string) {
    return fetch(`http://stpcentral.net/sched/all/${grade}-${section}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }
}
