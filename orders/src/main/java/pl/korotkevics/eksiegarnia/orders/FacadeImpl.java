package pl.korotkevics.eksiegarnia.orders;

import spark.Request;

class FacadeImpl implements Facade {

  private final Service service;

  FacadeImpl(Service service) {
    this.service = service;
  }

  @Override
  public Result create(Request req) {
    // TODO: handle OperationStatus.ERROR

    return new Result(OperationStatus.OK, service.create(req.body()));
  }
}
