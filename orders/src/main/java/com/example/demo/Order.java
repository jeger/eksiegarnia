package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "book_id")
    private long bookId;
    @Column(name = "shipping_id")
    private long shippingId;

    public Order() {
    }


    public long getShippingId() {
        return shippingId;
    }

    public void setShippingId(long shippingId) {
        this.shippingId = shippingId;
    }


    public long getId() {
        return id;
    }

    public long getBookId() {
        return bookId;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setBookId(long bookId) {
        this.bookId = bookId;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", bookId=" + bookId +
                ", shippingId=" + shippingId +
                '}';
    }
}
