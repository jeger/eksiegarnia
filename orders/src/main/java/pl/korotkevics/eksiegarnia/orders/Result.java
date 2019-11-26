package pl.korotkevics.eksiegarnia.orders;

class Result {
    private final OperationStatus operationStatus;
    private final Contents contents;

    Result(OperationStatus operationStatus, Contents contents) {
        this.operationStatus = operationStatus;
        this.contents = contents;
    }
}
