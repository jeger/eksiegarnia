package pl.korotkevics.eksiegarnia.orders;

import spark.Request;

interface Facade {
    Result create(Request req);
}

