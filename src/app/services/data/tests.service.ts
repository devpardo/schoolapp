import { Injectable } from "@angular/core";

@Injectable()
export class TestsService {
  constructor() {}

  async getTest(id) {
    return fetch(`http://stpcentral.net/test/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }
}
