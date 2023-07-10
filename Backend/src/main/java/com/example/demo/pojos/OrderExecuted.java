package com.example.demo.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "order_executed")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(("user"))
public class OrderExecuted extends BaseClass {

	@Column(name = "order_date",nullable = false)
	private LocalDate orderDate;
	@Column(name = "amount",nullable = false)
	private double amount;
	@Column(name = "product_traded",nullable = false,length = 30)
	private String productTraded;
	@Column(name = "quantity",nullable = false)
	private double quantity;
	@Column(name = "expected_date",nullable = false)
	private LocalDate expectedDate;
	@OneToOne @JoinColumn(name="user_id")
	private User user;
	@OneToOne(mappedBy = "orderExecuted", cascade = CascadeType.ALL)
	private Transaction transaction;
	
	
	public OrderExecuted() {
		super();
	}


	public LocalDate getOrderDate() {
		return orderDate;
	}


	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}


	public double getAmount() {
		return amount;
	}


	public void setAmount(double amount) {
		this.amount = amount;
	}


	public String getProductTraded() {
		return productTraded;
	}


	public void setProductTraded(String productTraded) {
		this.productTraded = productTraded;
	}


	public double getQuantity() {
		return quantity;
	}


	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}


	public LocalDate getExpectedDate() {
		return expectedDate;
	}


	public void setExpectedDate(LocalDate expectedDate) {
		this.expectedDate = expectedDate;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Transaction getTransaction() {
		return transaction;
	}


	public void setTransaction(Transaction transaction) {
		this.transaction = transaction;
	}


	@Override
	public String toString() {
		return "OrderExecuted [orderDate=" + orderDate + ", amount=" + amount + ", productTraded=" + productTraded
				+ ", quantity=" + quantity + ", expectedDate=" + expectedDate + "]";
	}
	
	
}
