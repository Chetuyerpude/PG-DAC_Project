package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.pojos.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Long> {

}
