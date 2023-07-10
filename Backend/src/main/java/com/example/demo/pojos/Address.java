package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="address")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Address extends BaseClass{
	
	@Column(name = "address",nullable = false,length = 150)
	private String fullAddress;
	@Column(name = "village",nullable = false,length = 30)
	private String village;
	@Column(name = "district",nullable = false,length = 30)
	private String district;
	@Column(name = "state",nullable = false,length = 30)
	private String state;
	@Column(name = "pincode",nullable = false,length = 12)
	private String pincode;
//	@OneToOne  @JoinColumn(name = "user_id",nullable = false) 
//	private User user;
	
	
	@Override
	public String toString() {
		return "Address [address=" + fullAddress + ", village=" + village + ", district=" + district + ", state=" + state
				+ ", pincode=" + pincode +"]";
	}


	public Address() {
	super();
}


	public String getFullAddress() {
		return fullAddress;
	}


	public void setFullAddress(String fullAddress) {
		this.fullAddress = fullAddress;
	}


	public String getVillage() {
		return village;
	}


	public void setVillage(String village) {
		this.village = village;
	}


	public String getDistrict() {
		return district;
	}


	public void setDistrict(String district) {
		this.district = district;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	
}
