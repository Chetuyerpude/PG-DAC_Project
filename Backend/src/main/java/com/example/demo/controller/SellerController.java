package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
@RequestMapping("/seller")
@CrossOrigin
public class SellerController {

	@Autowired
	UserService userService;
	
	@Autowired
	ProductService productService;
	
	@Autowired
	OrderService orderService;
	
	@PostMapping("/addproduct/{id}")
	public String addProduct(@RequestBody Product product,@PathVariable long id) 
	{
	return productService.addProduct(product,id);	
	}
	
	@GetMapping("/availableproduct")
	public List<Product>getAllReqProducts() 
	{
		return productService.searchByProductNameForBuy();
	}
	
	@GetMapping("/myproduct/{id}")
	public List<Product>getAllProducts(@PathVariable Long id) 
	{
		return productService.myProducts(id);
	}
	
	@PutMapping("/updateseller/{id}")
	public String updateSeller(@RequestBody User user,@PathVariable Long id )
	{
		return userService.updateUser(id, user);
	}
	
	
	@DeleteMapping("/deleteproduct/{id}")
	public String deleteProduct(@PathVariable Long id)
	{
		return productService.deleteProduct(id);
	}
	
	@DeleteMapping("/afterorderexecution/{id}/{userid}")
	public String afterExecution(@PathVariable Long id,@PathVariable Long userid)
	{
		return productService.deleteProductAfterExecution(id,userid);
	}
	
	@GetMapping("gettransaction/{id}")
	public Transaction getTransactionByOrder(@PathVariable long id) {
		Transaction transaction=orderService.getOrderTransaction(id);
		return transaction;
	}
	
	@GetMapping("getmyorders/{id}")
	public List<OrderExecuted>getMyTransaction(@PathVariable long id){
	List<OrderExecuted>listofMyOrders=orderService.myOrderExecuted(id);
	return listofMyOrders;
	}
}
