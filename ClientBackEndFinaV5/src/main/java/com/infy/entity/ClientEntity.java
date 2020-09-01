package com.infy.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//Credit Card
@Entity
@Table(name = "client")
public class ClientEntity {

	@Id
	@Column(name = "timearrived")
	String timearrived;
	@Column(name = "message")
	String message;
	@Column(name="appear")
	Integer appear;

	public Integer getAppear() {
		return appear;
	}

	public void setAppear(Integer appear) {
		this.appear = appear;
	}

	public String getTimearrived() {
		return timearrived;
	}

	public void setTimearrived(String timearrived) {
		this.timearrived = timearrived;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "ClientEntity [timearrrived=" + timearrived + ", message="
				+ message + "]";
	}

}
