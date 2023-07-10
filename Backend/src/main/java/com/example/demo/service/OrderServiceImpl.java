package com.example.demo.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dao.OrderExecutedDao;
import com.example.demo.dao.TransactionDao;
import com.example.demo.dao.UserDao;
import com.example.demo.pojos.OrderExecuted;
import com.example.demo.pojos.Transaction;
import com.example.demo.pojos.User;
@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrderExecutedDao orderExecutedDao;
	
	@Autowired
	TransactionDao transactionDao;
	
	@Autowired
	UserDao userDao;
	
	@Override
	public String addOrderExecuted(OrderExecuted order) {
		orderExecutedDao.save(order);
		return "Order added successfully";
	}

	@Override
	public String addtransaction(Transaction transaction) {
		transactionDao.save(transaction);
		return "Transaction added Successfully"; 
	}

	@Override
	public List<Transaction> getAllTransactions() {
		List<Transaction>allTransactions=transactionDao.findAll();
		return allTransactions;
	}

	@Override
	public String generateRandomString() {
		String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		         + "0123456789"
		         + "abcdefghijklmnopqrstuvxyz";
		StringBuilder sb = new StringBuilder(8);
		  for (int i = 0; i < 8; i++) {
		   int index
		    = (int)(AlphaNumericString.length()
		      * Math.random());
		   sb.append(AlphaNumericString
		      .charAt(index));
		  }
		  return sb.toString();
	}

	@Override
	public Transaction getOrderTransaction(long id) {
		OrderExecuted orderExecuted=orderExecutedDao.findById(id).orElseThrow(()->new RuntimeException("OrderExecuted not found"));
		Transaction transaction=transactionDao.findByOrderExecuted(orderExecuted);
		return transaction;
	}

	@Override
	public List<OrderExecuted> myOrderExecuted(long id) {
		User user=userDao.findById(id).orElseThrow(()->new RuntimeException("user not found"));
		List<OrderExecuted> MyOrderList=orderExecutedDao.findByUser(user);
		return MyOrderList;
	}

	@Override
	public List<OrderExecuted> getAllOrderExecuted() {
	List<OrderExecuted> listOfAllOrderExecuted=orderExecutedDao.findAll();
		return listOfAllOrderExecuted;
	}

}
