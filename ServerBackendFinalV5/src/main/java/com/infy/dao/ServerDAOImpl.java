package com.infy.dao;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.infy.entity.ServerEntity;
import com.infy.model.Server;

@Repository
public class ServerDAOImpl implements ServerDAO {

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public String addClient(Server server) {
		

		ServerEntity se1=entityManager.find(ServerEntity.class, server.getIpaddress());
		if(se1==null){
		ServerEntity se= new ServerEntity();
		se.setIpaddress(server.getIpaddress());
		
		se.setAppear("1");
		se.setDescription(server.getDescription());
		entityManager.persist(se);
		}
		else{
			se1.setDescription(server.getDescription());
			se1.setAppear("1");
		}

		return server.getIpaddress();
	    }

	@Override
	public String deleteClient(String[] ipaddress) throws Exception{
		for(String i:ipaddress){
		Query query = entityManager.createQuery("UPDATE ServerEntity s SET s.appear =?1 where s.ipaddress = ?2");
		
		query.setParameter(1, "0");
		query.setParameter(2,  i);
		Integer j=query.executeUpdate();}
		return "Successfully Deleted";
	}
	@Override
	public List<Server> getAllClients() throws Exception {

		
		Query query = entityManager.createQuery("select server FROM ServerEntity server");
		List<Server> servers = null;			
		
		List<ServerEntity> serverEntities = query.getResultList();		
		servers = new ArrayList<Server>();
		System.out.println("in dao");

		for (ServerEntity serverEntity  : serverEntities) {
			if(serverEntity.getAppear().equals("1")){
				Server server = new Server();
				server.setIpaddress(serverEntity.getIpaddress());
				server.setDescription(serverEntity.getDescription());
				servers.add(server);
			}
		}
		return servers;
		
}
	public static void sendUDPMessage(String message, String ipAddress, int port) throws IOException {
	      DatagramSocket socket = new DatagramSocket();
	     
	      InetAddress group = InetAddress.getByName(ipAddress);
	      byte[] msg = message.getBytes();
	      DatagramPacket packet = new DatagramPacket(msg, msg.length,
	         group, port);
	      socket.send(packet);
	      socket.close();
	   }
	
	
	@Override
	public String sendMessage(String message) throws Exception{
//		String result="";
//		for(String i: ipaddress){
//			result+=i+",";
//		}
//		result+="&||&";
		
		sendUDPMessage(message, "230.0.0.0", 4321);
//		Query query = entityManager.createQuery("insert into messagelog values(?1,?2,?3)");
//		query.setParameter()
		return "Message sent successfully";
	}
	
}

	


