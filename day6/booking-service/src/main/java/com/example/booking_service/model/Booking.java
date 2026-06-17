package com.example.booking_service.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    private String userId;
    private String showId;
    private String seatNumber;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;
}
