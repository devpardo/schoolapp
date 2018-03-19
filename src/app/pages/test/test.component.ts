import { Component, OnInit } from "@angular/core";
import { TestsService } from "../../services/data/tests.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.sass"]
})
export class TestComponent implements OnInit {
  test;

  constructor(
    private testsService: TestsService,
    private route: ActivatedRoute
  ) {}
  async ngOnInit() {
    this.route.params.subscribe(async params => {
      const [test] = await this.testsService.getTest(params.id);
      this.test = test;
    });
  }
}
