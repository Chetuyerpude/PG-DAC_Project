package com.example.demo.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.pojos.User;
import java.util.List;
import java.lang.String;

@Repository
public interface UserDao extends JpaRepository<User, Long> {
		
	@Query("select u from User u where u.email =:em and u.password=:ps")
	public User AuthenticateUser( @Param("em") String email,@Param("ps") String password);
	
	List<User> findByRole(String role);
		
	@Query("select u from User u where u.email =:em")
	public User getUserByEmail( @Param("em") String email);
	
//	@Modifying
//	@Query("update User u set u.password =:ps where u.email=:em")
//	 void forgotPassword( @Param("ps") String password,@Param("em")String email );
}
