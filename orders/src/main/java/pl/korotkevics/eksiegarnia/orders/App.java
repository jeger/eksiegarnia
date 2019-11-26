package pl.korotkevics.eksiegarnia.orders;

public class App {
    public static void main(String[] args) {
        new Server(new FacadeImpl(service)).start();
    }
}
