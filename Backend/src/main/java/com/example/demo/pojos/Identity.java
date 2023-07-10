package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="identity")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Identity extends BaseClass  {
	@Column(name = "photo_id_number",length = 30)
	private String photoIdNumber;
	@Column(name = "photo_id_type",length = 20)
	private String photoIdType;
	
	
	public Identity() {
		super();
	}


	public String getPhotoIdNumber() {
		return photoIdNumber;
	}


	public void setPhotoIdNumber(String photoIdNumber) {
		this.photoIdNumber = photoIdNumber;
	}


	public String getPhotoIdType() {
		return photoIdType;
	}


	public void setPhotoIdType(String photoIdType) {
		this.photoIdType = photoIdType;
	}


	@Override
	public String toString() {
		return "Identity [photoIdNumber=" + photoIdNumber + ", photoIdType=" + photoIdType + "]";
	}
	
}
