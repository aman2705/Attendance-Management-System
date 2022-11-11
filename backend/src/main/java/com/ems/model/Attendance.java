package com.ems.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity


public class Attendance {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long attendanceid;
	private Long empid;
	private Date date;
	private String present;
	public Attendance() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Attendance(Long attendanceId, Long empid, Date date, String present) {
		super();
		this.attendanceid = attendanceId;
		this.empid = empid;
		this.date = date;
		this.present = present;
	}
	public Long getAttendanceId() {
		return attendanceid;
	}
	public void setAttendanceId(Long attendanceId) {
		this.attendanceid = attendanceId;
	}
	public Long getEmpid() {
		return empid;
	}
	public void setEmpid(Long empid) {
		this.empid = empid;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getPresent() {
		return present;
	}
	public void setPresent(String present) {
		this.present = present;
	}
	
	
	
}
