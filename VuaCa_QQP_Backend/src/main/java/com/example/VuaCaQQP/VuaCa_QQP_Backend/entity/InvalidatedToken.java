package com.example.VuaCaQQP.VuaCa_QQP_Backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "invalidatedtoken")
public class InvalidatedToken {
    @Id
    String id;
    @Column(name = "expirationtime")
    Date expirationTime;
}
