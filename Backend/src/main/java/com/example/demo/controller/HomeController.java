package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dto.Authentication;
import com.example.demo.pojos.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/")
@CrossOrigin
public class HomeController {

	@Autowired
	UserService userService;
	
	@PostMapping("/register")
	public String createUser(@RequestBody User user)
	{
		return userService.registerUser(user);
	}
	
	@PostMapping("/login")
	public User login(@RequestBody Authentication authentication) {
		String email=authentication.getEmail();
		String password=authentication.getPassword();
		User user=userService.authenticateUser(email, password);
		return user;
	}
	
}
