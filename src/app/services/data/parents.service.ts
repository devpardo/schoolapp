import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { StudentsService } from "./students.service";

@Injectable()
export class ParentsService {
  parents = [
    {
      id: 1,
      children: []
    },
    {
      id: 2,
      children: []
    },
    {
      id: 3,
      children: [1, 2]
    }
  ];
  constructor(private studentService: StudentsService) {}

  // getParents(ids?: string[] | number[]) {
  //   return Observable.from(
  //     ids
  //       ? this.parents.filter((data: any) => (<any[]>ids).includes(data.id))
  //       : this.parents
  //   );
  // }
  // getParent(value: string | number, key: string = "id") {
  //   return this.getParents().find(data => data[key] === value);
  // }

  // getParentWithChildren(id) {
  //   return this.getParent(id).merge(this.studentService.getStudent);
  // }
  getParents() {
    return this.parents;
  }
  getParent(value: string | number, key: string = "id") {
    return this.parents.find(data => data[key] === value);
  }
}
