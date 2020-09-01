package com.infy.dao;

import java.net.InetAddress;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.infy.entity.ClientEntity;
import com.infy.model.Client;

@Repository
public class ClientDAOImpl implements ClientDAO {
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public String deleteMessage(Client client) throws Exception{
		
		ClientEntity ce=entityManager.find(ClientEntity.class, client.getTimearrived());
	//	System.out.println("in delete dao");
		ce.setAppear(0);
		entityManager.persist(ce);
		return "Message deleted successfully";
	}
	
	@Override
	public List<Client> getAllMessage(){
		Query query =entityManager.createQuery("Select msg from ClientEntity msg order by msg.timearrived");
		List<Client> allmsg=null;
		List<ClientEntity> allMessage=query.getResultList();
		//String a="";
		
		DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
		if(allMessage.size()>=2){
			String msgLast=allMessage.get(allMessage.size()-1).getTimearrived();
			ClientEntity secondLast=allMessage.get(allMessage.size()-2);
			
			if(LocalDateTime.parse(msgLast, formatter).plusSeconds(1).isAfter(LocalDateTime.parse(secondLast.getTimearrived(), formatter))
					&& LocalDateTime.parse(msgLast, formatter).minusSeconds(1).isBefore(LocalDateTime.parse(secondLast.getTimearrived(), formatter))){
				//System.out.println(secondLast.toString()+" popping it");
				entityManager.remove(secondLast);
			}
		}
		allmsg=new ArrayList<Client>();
		for(ClientEntity ce:allMessage){
			if(ce.getAppear()!=0){
				Client c=new Client();
				c.setTimearrived(ce.getTimearrived());
				//a= encry(ce.getMessage());
				c.setMessage(encry(ce.getMessage()));
				c.setAppear(ce.getAppear());
				//String n=ce.getTimearrived()+"&"+ce.getMessage();
				allmsg.add(c);
			}
		}
		
		return allmsg;
	}
	@Override
	public String getMessage(String message) throws Exception {
		

		modelToEntity (message);
		

		return "successful";
	}

	

	private void modelToEntity(String message) throws Exception {
		//System.out.println("message: "+message);
		String[] ipmsg=message.split(",&");
		//System.out.println(ipmsg[0]+"......."+ipmsg[1]);
		String[] allip=ipmsg[0].split(",");
		//String a="";
		InetAddress inetAddress = InetAddress.getLocalHost();
		String currentip= inetAddress.getHostAddress();
	
		for(String ips: allip){
			//System.out.println("checking with: "+ips);
			if(ips.equals(currentip) ){
				ClientEntity ce = new ClientEntity();
				//a=encry(ipmsg[1]);
				ce.setMessage(encry(ipmsg[1]));
				//ce.setTimearrived(new Timestamp(System.currentTimeMillis()).toString());
				ce.setTimearrived(LocalDateTime.now().toString());
				ce.setAppear(1);
				//System.out.println(ce.toString()+" element");
				
				entityManager.persist(ce);
			}
		}
		
	}
	
	public String encry(String message){
		char[] charArr=message.toCharArray();
		int instant;
		char a;
		String final_message="";
		for (int i=0; i<charArr.length;i++){
			instant= charArr[i]^130;
			a=(char)instant;
			final_message=final_message+a ;
		}
		return final_message;
	}

}
