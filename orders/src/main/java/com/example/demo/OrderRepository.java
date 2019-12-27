package com.example.demo;

import org.springframework.data.repository.Repository;

public interface OrderRepository extends Repository<Order, Integer> {
    void save(Order order);
}
