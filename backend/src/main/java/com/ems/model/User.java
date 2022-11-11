package com.ems.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "USERS")
public class User {
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	private String username;
	private String password;
	
	public User( String username, String password) {
		super();
		
		this.username = username;
		this.password = password;
	}
	
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
