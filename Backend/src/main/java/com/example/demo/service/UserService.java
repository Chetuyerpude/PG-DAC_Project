package com.example.demo.service;

import java.util.List;

import com.example.demo.pojos.User;

public interface UserService {

	public String registerUser(User user);
	
	public User getUserById(long id);
	
	public User authenticateUser(String email,String password);
	
	public String deleteUser(long id);
	
	public String updateUser(long id,User newUser);
	
	public List<User> getAllUser();

	public List<User> findByRole(String role);
	
	public String forgotPassword(String password,String email);

	public String otp();
}
