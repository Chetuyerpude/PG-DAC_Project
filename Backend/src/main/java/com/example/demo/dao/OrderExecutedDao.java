package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.pojos.OrderExecuted;
import com.example.demo.pojos.User;
import java.util.List;


@Repository
public interface OrderExecutedDao extends JpaRepository<OrderExecuted, Long>{

	List<OrderExecuted> findByUser(User user);
}
