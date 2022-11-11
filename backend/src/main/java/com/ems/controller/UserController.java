package com.ems.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.model.Attendance;
import com.ems.model.User;
import com.ems.repository.UserRepository;

@RestController
@RequestMapping("/User")
@CrossOrigin("*")
public class UserController {
	
	
	@Autowired
	private UserRepository ur;
	
	@PostMapping("/addAdmin")
	public User adduser(@RequestBody User add)
	{
		return ur.save(add);
	}
	
	@GetMapping("/all")
	public List<User> getAllAdmins()
	{
		return ur.findAll();
	}
	
	@PostMapping("/check")
	public boolean check(@RequestBody User add) {
		
//		System.out.println(add.getUsername()+" "+add.getPassword());
		List<User> al=ur.findAll();
		boolean b=false;
		for(User temp:al) {
			if(temp.getPassword().equals(add.getPassword()) && temp.getUsername().equals(add.getUsername())) {
				b=true;
				break;
			}
		}
		return b;
	}
	

    




	
	
}
