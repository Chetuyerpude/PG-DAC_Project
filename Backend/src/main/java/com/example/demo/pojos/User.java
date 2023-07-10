package com.example.demo.pojos;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseClass {

	@Column(name="title",length = 10)
	private String title;
	@Column(name = "first_name",length = 20,nullable = false)
	private String firstName;
	@Column(name = "middle_name",length = 20,nullable = false)
	private String middleName;
	@Column(name = "last_name",length = 20,nullable = false)
	private String lastName;
	@Column(name = "dob",nullable = false)
	private LocalDate dob;
	@Column(name = "registration_date",nullable = false)
	private LocalDate registrationDate;
	@Column(name = "role",nullable = false,length = 25)
	private String role;
	@Column(name = "password",nullable = false)
	private String password;
	@Column(name = "gender",length = 20,nullable = false)
	private String gender;
	@Column(name = "email",length = 40,nullable = false)
	private String email;
	@Column(name = "mobile_number",length = 14,nullable = false)
	private String mobileNumber;
	
	
	
	public User() {
		super();
	}

	//relation with product pojo
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Product>product;
	
	//relation with orderExecuted pojo 
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<OrderExecuted>orderExecuted;
	
	//relation with address pojo 
	@OneToOne(cascade = CascadeType.ALL)
	private Address address;
	//relation with identity pojo 
	@OneToOne(cascade = CascadeType.ALL)
	private Identity identity;
	//relation with BankDetail pojo 
	@OneToOne(cascade = CascadeType.ALL)
	private BankDetail bankDetails;
	
	
	
	// Customized constructor
	public User(String title, String firstName, String middleName, String lastName, LocalDate dob,
			LocalDate registrationDate, String role, String password, String gender, String email,
			String mobileNumber) {
		super();
		this.title = title;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.dob = dob;
		this.registrationDate = registrationDate;
		this.role = role;
		this.password = password;
		this.gender = gender;
		this.email = email;
		this.mobileNumber = mobileNumber;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public LocalDate getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(LocalDate registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	public List<OrderExecuted> getOrderExecuted() {
		return orderExecuted;
	}

	public void setOrderExecuted(List<OrderExecuted> orderExecuted) {
		this.orderExecuted = orderExecuted;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Identity getIdentity() {
		return identity;
	}

	public void setIdentity(Identity identity) {
		this.identity = identity;
	}

	public BankDetail getBankDetails() {
		return bankDetails;
	}

	public void setBankDetails(BankDetail bankDetails) {
		this.bankDetails = bankDetails;
	}

	// To String method
	@Override
	public String toString() {
		return "User [firstName=" + firstName + ", middleName=" + middleName + ", lastName=" + lastName + ", dob=" + dob
				+ ", registrationDate=" + registrationDate + ", role=" + role + ", password=" + password + ", gender="
				+ gender + ", email=" + email + ", mobileNumber=" + mobileNumber + "]";
	}
}
