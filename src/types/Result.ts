class Result {
  readonly product: Product;
  readonly metro: Metro;
  readonly project: Project;
  constructor(product: Product, metro: Metro, project: Project) {
    this.product = product;
    this.metro = metro;
    this.project = project;
  }
}
