package com.davr7.msemail.resources;

import com.davr7.msemail.dtos.EmailResDTO;
import com.davr7.msemail.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmailResource {
    @Autowired
    EmailService emailServ;

    @GetMapping("/email")
    public ResponseEntity<List<EmailResDTO>> handleReadAllEmails() {
        List<EmailResDTO> list = emailServ.readAllEmails();
        return ResponseEntity.ok().body(list);
    }
}
