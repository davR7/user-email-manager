package com.davr7.msemail.services;

import com.davr7.msemail.dtos.EmailDTO;
import com.davr7.msemail.dtos.EmailResDTO;
import com.davr7.msemail.domain.Email;
import com.davr7.msemail.enums.StatusEmail;
import com.davr7.msemail.repositories.EmailRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmailService {
    @Autowired
    EmailRepository emailRepo;
    @Autowired
    JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    String emailFrom;

    public Email sendEmail(EmailDTO emailDto) {
        Email email = new Email(emailDto);

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(emailFrom);
            message.setTo(email.getEmailTo());
            message.setSubject(email.getSubject());
            message.setText(email.getText());
            mailSender.send(message);
            email.setStatusEmail(StatusEmail.SENT);
        } catch(MailException e) {
            System.out.println(e.getMessage());
            email.setStatusEmail(StatusEmail.ERROR);
        }

        return emailRepo.save(email);
    }

    public List<EmailResDTO> readAllEmails() {
        List<Email> emails = emailRepo.findAll();
        return emails.stream().map(email -> {
            EmailResDTO emailRes = new EmailResDTO();
            BeanUtils.copyProperties(email, emailRes);
            return emailRes;
        }).collect(Collectors.toList());
    }
}
