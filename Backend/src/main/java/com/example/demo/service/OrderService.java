package com.example.demo.service;

import java.util.List;

import com.example.demo.pojos.OrderExecuted;
import com.example.demo.pojos.Transaction;

public interface OrderService {

	public String addOrderExecuted(OrderExecuted order);
	
	public String addtransaction(Transaction transaction);
	
	public List<Transaction>getAllTransactions();
	
	public String generateRandomString();
	
	public Transaction getOrderTransaction(long id);
	
	public List<OrderExecuted> myOrderExecuted(long id);
	
	public List<OrderExecuted> getAllOrderExecuted();
}
