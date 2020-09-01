package com.infy;


import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.MulticastSocket;
		
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import com.infy.service.ClientServiceImpl;

@EnableScheduling
@SpringBootApplication
public class EmergencyMessagingSystemClient implements CommandLineRunner{
	
	@Autowired
	ClientServiceImpl clientService;

	public static void main(String[] args) {
		SpringApplication.run(EmergencyMessagingSystemClient.class, args);
	}
	
	public void run(String... args) throws Exception {

	receiveUDPMessage();

			
	}
	
	@Scheduled(fixedRate = 1000)
	public void receiveUDPMessage() throws Exception {
	 byte[] buffer=new byte[1024];
	 MulticastSocket socket=new MulticastSocket(4321);
	 InetAddress group=InetAddress.getByName("230.0.0.0");
	 socket.joinGroup(group);
	 
	   // System.out.println("Waiting for multicast message...");
	    DatagramPacket packet=new DatagramPacket(buffer, buffer.length);
	    socket.receive(packet);
	    
	    String msg=new String(packet.getData(),packet.getOffset(),packet.getLength());
	  //  System.out.println("[Multicast UDP message received]>> "+msg);
	    if("OK".equals(msg)) {
	      // System.out.println("No more message. Exiting : "+msg);
	       
	    }
	 
	    
	    clientService.getMessage(msg);
	    
	 socket.leaveGroup(group);
	 socket.close();
}
}
