package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.pojos.Identity;

@Repository
public interface IdentityDao extends JpaRepository<Identity, Long> {

}
