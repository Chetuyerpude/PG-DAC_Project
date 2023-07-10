package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.pojos.Transaction;
import com.example.demo.pojos.OrderExecuted;

@Repository
public interface TransactionDao extends JpaRepository<Transaction, Long>{

	public Transaction findByOrderExecuted(OrderExecuted orderexecuted);
	
}
