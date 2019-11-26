package pl.korotkevics.eksiegarnia.orders;

import static spark.Spark.path;
import static spark.Spark.post;

class Server {

    private Facade facade;

    Server(Facade facade) {
        this.facade = facade;
    }

    void start() {
        path("/orders", () -> post("", (req, res) -> facade.create(req)));
    }
}
