package pl.korotkevics.eksiegarnia.orders;

import spark.Request;

class FacadeImpl implements Facade {

  private final Service service;

  private final ParsingUtility parsingUtility;

  FacadeImpl(Service service, ParsingUtility parsingUtility) {
    this.service = service;
    this.parsingUtility = parsingUtility;
  }

  @Override
  public Result<Order> create(Request req) {
    // TODO: handle OperationStatus.ERROR
    return new Result<>(OperationStatus.OK,
        service.create(parsingUtility.parse(req.body(), Order.class)));
  }
}
