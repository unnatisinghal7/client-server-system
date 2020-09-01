package com.infy.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

//import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="server")
//@GenericGenerator(name="idGen",strategy="increment")
public class ServerEntity {
	@Id
	//@GeneratedValue(generator="idGen")
	@Column(name="ipaddress")
	private String ipaddress;
	@Column(name="description")
	private String description;
	@Column(name="appear")
	private String appear;
	
	public String getIpaddress() {
		return ipaddress;
	}
	public String getAppear() {
		return appear;
	}
	public void setAppear(String appear) {
		this.appear = appear;
	}
	public void setIpaddress(String ipaddress) {
		this.ipaddress = ipaddress;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	
}
