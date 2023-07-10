package com.example.demo.pojos;

import java.time.LocalDate;

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
@Table(name="transactions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(("orderExecuted"))
public class Transaction extends BaseClass {
	@Column(name = "trn_number",nullable = false,length = 50)
	private String trnNumber;
	@Column(name = "amount",nullable = false)
	private double amount;
	@Column(name = "trn_date",nullable = false)
	private LocalDate trnDate;
	@OneToOne @JoinColumn(name="order_executed_id")
	private OrderExecuted orderExecuted;
	
	
	public Transaction() {
		super();
	}


	public String getTrnNumber() {
		return trnNumber;
	}


	public void setTrnNumber(String trnNumber) {
		this.trnNumber = trnNumber;
	}


	public double getAmount() {
		return amount;
	}


	public void setAmount(double amount) {
		this.amount = amount;
	}


	public LocalDate getTrnDate() {
		return trnDate;
	}


	public void setTrnDate(LocalDate trnDate) {
		this.trnDate = trnDate;
	}


	public OrderExecuted getOrderExecuted() {
		return orderExecuted;
	}


	public void setOrderExecuted(OrderExecuted orderExecuted) {
		this.orderExecuted = orderExecuted;
	}


	@Override
	public String toString() {
		return "Transaction [trnNumber=" + trnNumber + ", amount=" + amount + ", trnDate=" + trnDate + "]";
	}
	
}
