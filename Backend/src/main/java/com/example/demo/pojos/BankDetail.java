package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="bank_details")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BankDetail extends BaseClass{

	@Column(name = "bank_name",nullable = false,length = 40)
	private String bankName;
	@Column(name = "account_holder",nullable = false,length = 45)
	private String accountHolderName;
	@Column(name = "branch",nullable = false,length = 20)
	private String branch;
	@Column(name = "account_number",nullable = false,length = 30,unique = true)
	private String accountNumber;
	@Column(name = "ifsc_code",nullable = false,length = 30)
	private String ifscCode;

	
	
	public BankDetail() {
		super();
	}



	public String getBankName() {
		return bankName;
	}



	public void setBankName(String bankName) {
		this.bankName = bankName;
	}



	public String getAccountHolderName() {
		return accountHolderName;
	}



	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}



	public String getBranch() {
		return branch;
	}



	public void setBranch(String branch) {
		this.branch = branch;
	}



	public String getAccountNumber() {
		return accountNumber;
	}



	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}



	public String getIfscCode() {
		return ifscCode;
	}



	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}



	@Override
	public String toString() {
		return "BankDetail [bankName=" + bankName + ", accountHolderName=" + accountHolderName + ", branch=" + branch
				+ ", accountNumber=" + accountNumber + ", ifscCode=" + ifscCode + "]";
	}
	
}
