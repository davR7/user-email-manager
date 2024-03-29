package com.davr7.msemail.domain;

import com.davr7.msemail.common.BaseEntity;
import com.davr7.msemail.dtos.EmailDTO;
import com.davr7.msemail.enums.StatusEmail;
import jakarta.persistence.*;
import lombok.*;
import java.time.Instant;

@Entity
@Table(name="emails")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Email extends BaseEntity {
    private String ownerRef;
    private String emailTo;
    private String subject;
    @Column(columnDefinition = "TEXT")
    private String text;
    private Instant dateEmail;
    private StatusEmail statusEmail;

    public Email(EmailDTO emailDto) {
        this.ownerRef = emailDto.getUserId();
        this.emailTo = emailDto.getEmailTo();
        this.subject = emailDto.getSubject();
        this.text = emailDto.getText();
        this.dateEmail = Instant.now();
    }
}
