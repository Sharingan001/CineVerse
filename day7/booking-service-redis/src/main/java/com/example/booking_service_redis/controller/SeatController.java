package com.example.booking_service_redis.controller;

import com.example.booking_service_redis.service.SeatLockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/seats")
public class SeatController {

    @Autowired
    private SeatLockService seatLockService;

    @PostMapping("/lock")
    public ResponseEntity<?> lockSeat(@RequestBody Map<String, String> request) {
        String showId = request.get("showId");
        String seatNumber = request.get("seatNumber");

        if (showId == null || seatNumber == null) {
            return ResponseEntity.badRequest().body("showId and seatNumber are required");
        }

        boolean locked = seatLockService.lockSeat(showId, seatNumber);
        if (locked) {
            return ResponseEntity.ok(Map.of(
                    "status", "success",
                    "message", "Seat locked successfully for 5 minutes"
            ));
        } else {
            return ResponseEntity.status(409).body(Map.of(
                    "status", "error",
                    "message", "Seat is already locked or booked"
            ));
        }
    }

    @GetMapping("/status")
    public ResponseEntity<?> checkStatus(@RequestParam String showId, @RequestParam String seatNumber) {
        boolean available = seatLockService.isSeatAvailable(showId, seatNumber);
        return ResponseEntity.ok(Map.of(
                "showId", showId,
                "seatNumber", seatNumber,
                "available", available
        ));
    }

    @PostMapping("/release")
    public ResponseEntity<?> releaseSeat(@RequestBody Map<String, String> request) {
        String showId = request.get("showId");
        String seatNumber = request.get("seatNumber");

        seatLockService.releaseSeat(showId, seatNumber);
        return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Seat lock released"
        ));
    }
}
