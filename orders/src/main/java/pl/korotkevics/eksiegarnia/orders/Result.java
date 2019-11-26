package pl.korotkevics.eksiegarnia.orders;

class Result {

  private final OperationStatus operationStatus;
  private final Object contents;

  Result(OperationStatus operationStatus, Object contents) {
    this.operationStatus = operationStatus;
    this.contents = contents;
  }
}
