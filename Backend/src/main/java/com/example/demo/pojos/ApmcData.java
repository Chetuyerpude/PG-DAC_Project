package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "apmc_data")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ApmcData extends BaseClass{
	
	@Column(name = "product_name",nullable = false ,unique = true,length = 30)
	private String productName;
	@Column(name = "season",nullable = false,length = 20)
	private String season;
	@Column(name = "minimum_price")
	private double minPrice;
	@Column(name = "maximum_price")
	private double maxPrice;
	@Column(name = "district",length = 30)
	private String district;
	
	
		
	public String getProductName() {
		return productName;
	}



	public void setProductName(String productName) {
		this.productName = productName;
	}



	public String getSeason() {
		return season;
	}



	public void setSeason(String season) {
		this.season = season;
	}



	public double getMinPrice() {
		return minPrice;
	}



	public void setMinPrice(double minPrice) {
		this.minPrice = minPrice;
	}



	public double getMaxPrice() {
		return maxPrice;
	}



	public void setMaxPrice(double maxPrice) {
		this.maxPrice = maxPrice;
	}



	public String getDistrict() {
		return district;
	}



	public void setDistrict(String district) {
		this.district = district;
	}



	@Override
	public String toString() {
		return "ApmcData [productName=" + productName + ", season=" + season + ", minPrice=" + minPrice + ", maxPrice="
				+ maxPrice + ", district=" + district + "]";
	}
	
}
