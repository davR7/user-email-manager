package com.davr7.msemail.dtos;

import com.davr7.msemail.enums.StatusEmail;
import lombok.Data;

import java.time.Instant;

@Data
public class EmailResDTO {
    private String userId;
    private String ownerRef;
    private String emailTo;
    private String subject;
    private String text;
    private Instant dateEmail;
    private StatusEmail statusEmail;
}
