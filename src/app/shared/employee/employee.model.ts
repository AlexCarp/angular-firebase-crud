export class Employee {
  constructor(
    public name: string = null,
    public position: string = null,
    public office: string = null,
    public salary: number = null,
  ) {}
  $key: string;
}
