package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.pojos.BankDetail;
@Repository
public interface BankDetailDao extends JpaRepository<BankDetail, Long> {

}
