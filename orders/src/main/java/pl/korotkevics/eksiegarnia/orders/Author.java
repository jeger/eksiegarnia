package pl.korotkevics.eksiegarnia.orders;

class Author {

  private final String firstName;
  private final String middleName;
  private final String lastName;

  Author(String firstName, String middleName, String lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  @Override
  public String toString() {
    return "Author{" +
        "firstName='" + firstName + '\'' +
        ", middleName='" + middleName + '\'' +
        ", lastName='" + lastName + '\'' +
        '}';
  }
}
