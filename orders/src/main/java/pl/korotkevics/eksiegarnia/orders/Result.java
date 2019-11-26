package pl.korotkevics.eksiegarnia.orders;

class Result<T> {

  private final OperationStatus operationStatus;
  private final T contents;

  Result(OperationStatus operationStatus, T contents) {
    this.operationStatus = operationStatus;
    this.contents = contents;
  }

  @Override
  public String toString() {
    return "Result{" +
        "operationStatus=" + operationStatus +
        ", contents=" + contents +
        '}';
  }
}
