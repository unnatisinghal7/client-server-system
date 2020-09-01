package com.infy.api;

import java.util.ArrayList;
import java.util.List;






import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.bind.annotation.PathVariable;

import com.infy.model.Client;
import com.infy.service.ClientServiceImpl;



@CrossOrigin
@RestController
@RequestMapping("clientAPI")
public class ClientAPI {
	static Logger logger = LogManager.getLogger(ClientAPI.class);
	@Autowired
	Environment environment;
	@Autowired
	ClientServiceImpl serviceImpl;
	
	@RequestMapping(value="message",method=RequestMethod.GET)
	public ResponseEntity<List<Client>> getAllMessage() throws Exception {
		logger.trace("<C> BooksAPI <M> getAllBooks");
		List<Client> msg=new ArrayList<>();
		try {
			//BooksServiceImpl serviceImpl = (BooksServiceImpl) ContextFactory.getContext().getBean("BooksServiceImpl");
			msg=serviceImpl.getAllMessage();
			return new ResponseEntity<List<Client>>(msg,HttpStatus.OK);
		} catch (Exception e) {
		//	Environment environment = ContextFactory.getContext().getEnvironment();
			
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,	e.getMessage(), e);
		}
		
	}
	
	@RequestMapping(value="delete",method=RequestMethod.PUT)
	public ResponseEntity<String> deleteMessage(@RequestBody Client client) throws Exception {
		logger.trace("<C> BooksAPI <M> getAllBooks");
		String msg="";
		try {
			//BooksServiceImpl serviceImpl = (BooksServiceImpl) ContextFactory.getContext().getBean("BooksServiceImpl");
			serviceImpl.deleteMessage(client);
			return new ResponseEntity<String>(HttpStatus.OK);
		} catch (Exception e) {
		//	Environment environment = ContextFactory.getContext().getEnvironment();
			
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,	e.getMessage(), e);
		}
		
	}
}
