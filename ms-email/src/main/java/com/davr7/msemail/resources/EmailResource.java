package com.davr7.msemail.resources;

import com.davr7.msemail.domain.Email;
import com.davr7.msemail.dtos.EmailDTO;
import com.davr7.msemail.dtos.EmailResDTO;
import com.davr7.msemail.services.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmailResource {
    @Autowired
    EmailService emailServ;

    @PostMapping("/sending-email")
    public ResponseEntity<Email> handleSendEmail(@RequestBody @Valid EmailDTO emailDto) {
        var data = emailServ.sendEmail(emailDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(data);
    }

    @GetMapping("/emails")
    public ResponseEntity<List<EmailResDTO>> handleReadAllEmails() {
        List<EmailResDTO> list = emailServ.readAllEmails();
        return ResponseEntity.ok().body(list);
    }
}
