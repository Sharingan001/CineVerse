package com.example.booking_service_redis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
public class SeatLockService {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    /**
     * Locks a seat for 5 minutes.
     */
    public boolean lockSeat(String showId, String seatNumber) {
        String key = "seat:" + showId + ":" + seatNumber;
        Boolean success = redisTemplate.opsForValue()
                .setIfAbsent(key, "LOCKED", Duration.ofMinutes(5));
        return Boolean.TRUE.equals(success);
    }

    /**
     * Checks if a seat is currently locked.
     */
    public boolean isSeatAvailable(String showId, String seatNumber) {
        String key = "seat:" + showId + ":" + seatNumber;
        return !redisTemplate.hasKey(key);
    }

    /**
     * Releases a lock immediately (e.g., after booking is confirmed or user cancels).
     */
    public void releaseSeat(String showId, String seatNumber) {
        String key = "seat:" + showId + ":" + seatNumber;
        redisTemplate.delete(key);
    }
}
