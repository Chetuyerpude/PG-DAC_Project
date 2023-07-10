package com.example.demo.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Future;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonIgnoreProperties(("user"))
public class Product extends BaseClass {
	
	@Column(name = "product_name",nullable = false)
	private String productName;
	@Column(name = "quantity",nullable = false)
	private double quantity;
	@Column(name = "price",nullable = false)
	private double price;
	@Column(name = "expected_date",nullable = false)
	@Future
	private LocalDate expectedDate;
	@Column(name = "buy_or_sell",nullable = false)
	private String buyOSell;
	
	@OneToOne @JoinColumn(name="user_id")
	private User user;
	
	
	
	public Product() {
		super();
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public LocalDate getExpectedDate() {
		return expectedDate;
	}

	public void setExpectedDate(LocalDate expectedDate) {
		this.expectedDate = expectedDate;
	}

	public String getBuyOSell() {
		return buyOSell;
	}

	public void setBuyOSell(String buyOSell) {
		this.buyOSell = buyOSell;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Order [productName=" + productName + ", quantity=" + quantity + ", price=" + price + ", expectedDate="
				+ expectedDate + ", BuyOrSell=" + buyOSell + "]";
	}
}
