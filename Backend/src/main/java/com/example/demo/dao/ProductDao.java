package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.pojos.Product;
import com.example.demo.pojos.User;
@Repository
public interface ProductDao extends JpaRepository<Product, Long> {

	@Query("select p from Product p where p.buyOSell =:rq")
	public List<Product> listOfProducts(@Param("rq")String buyOrSell);
	
	
	List<Product> findByUser(User user);
	
	
}
