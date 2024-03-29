package com.davr7.msemail.repositories;

import com.davr7.msemail.domain.Email;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository<Email, String> {
}
