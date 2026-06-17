package com.example.movie_service.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "movies")
public class Movie {
    @Id
    private String id;
    private String title;
    private List<String> genre;
    private double rating;
    private String language;
    private int duration;
    private String releaseDate;
    private String posterUrl;
}
