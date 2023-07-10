package com.example.demo.service;

import java.time.LocalDate;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dao.UserDao;
import com.example.demo.pojos.User;

@Transactional
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;
	
	@Override
	public String registerUser(User user) {
		user.setRegistrationDate(LocalDate.now());
		userDao.save(user);
		return "User added successfully";
	}

	@Override
	public User authenticateUser(String email,String password) {
		User user= userDao.AuthenticateUser(email, password);
		return user;
	}

	@Override
	public String deleteUser(long id) {
		userDao.deleteById(id);
		return "User deleted Successfully";
	}

	@Override
	public String updateUser(long id,User newUser) {
		User oldUser=userDao.findById(id).orElseThrow(()->new RuntimeException("Id not found"));
		oldUser.setDob(newUser.getDob());
		oldUser.setEmail(newUser.getEmail());
		oldUser.setFirstName(newUser.getFirstName());
		oldUser.setGender(newUser.getGender());
		oldUser.setLastName(newUser.getLastName());
		oldUser.setMiddleName(newUser.getMiddleName());
		oldUser.setMobileNumber(newUser.getMobileNumber());
		oldUser.setPassword(newUser.getPassword());
		userDao.save(oldUser);
		return "user Updates Successfully";
	}

	@Override
	public List<User> getAllUser() {
		 List<User>allUsers=userDao.findAll();
		return allUsers;
	}
	
	@Override
	public List<User> findByRole(String role){
		List<User>listOfUsers=userDao.findByRole(role);
		return listOfUsers;
	}

	@Override
	public User getUserById(long id) {
		User user= userDao.findById(id).orElseThrow(()->new RuntimeException("User not found"));
		return user;
	}

	@Override
	public String forgotPassword(String password,String email) {
		User user=userDao.getUserByEmail(email);
		user.setPassword(password);
		userDao.save(user);
		return "password Updated Successfully";
	}

	@Override
	public String otp() {
		String otp = "123456789"
		         + "0123456789"
		         + "987654301";
		StringBuilder sb = new StringBuilder(4);
		  for (int i = 0; i < 4; i++) {
		   int index
		    = (int)(otp.length()
		      * Math.random());
		   sb.append(otp	
		      .charAt(index));
		  }
		  
		  return sb.toString();
	}

}
