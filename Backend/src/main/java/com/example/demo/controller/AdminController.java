package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojos.OrderExecuted;
import com.example.demo.pojos.Product;
import com.example.demo.pojos.Transaction;
import com.example.demo.pojos.User;
import com.example.demo.service.OrderService;
import com.example.demo.service.ProductService;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	@Autowired
	private UserService userService;
	
	@Autowired
	ProductService productservice;
	
	@Autowired
	OrderService orderService;
	
	//TransactionService transactionService;
	
	@GetMapping("/product")
	public List<Product> getAllProducts()
	{
		return productservice.getAllProducts();
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public String deleteUser(@PathVariable Long id)
	{
		return userService.deleteUser(id);
	}
	@GetMapping("/getuser/{id}")
	public User getUserById(@PathVariable Long id)
	{
		User user=userService.getUserById(id);
		return user ;
	}
	
	@GetMapping("/getallusers")
	public List<User>getAllUsers(){
		List<User>listOfusers= userService.getAllUser();
		return listOfusers;
	}
	
	@GetMapping("/getalltransactions")
	public List<Transaction> getAllTransactions()
	{
		List<Transaction> AllTransactions=orderService.getAllTransactions();
		return AllTransactions;
	}

	@GetMapping("/getallorderexecuted")
	public List<OrderExecuted>getAllOrderExecuted(){
		List<OrderExecuted>listOfAllOrderExecuted=orderService.getAllOrderExecuted();
		return listOfAllOrderExecuted;
	}
}
