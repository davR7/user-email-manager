package com.davr7.msemail.consumers;

import com.davr7.msemail.dtos.EmailDTO;
import com.davr7.msemail.services.EmailService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class EmailConsumer {

    final EmailService emailService;

    public EmailConsumer(EmailService emailService) {
        this.emailService = emailService;
    }

    @RabbitListener(queues = "${broker.queue.name}" )
    public void listenEmailQueue(@Payload EmailDTO emailDTO) {
        emailService.sendEmail(emailDTO);
    }
}
