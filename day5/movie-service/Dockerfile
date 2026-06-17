# Build stage
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY day5/movie-service/gradlew .
COPY day5/movie-service/gradle gradle
COPY day5/movie-service/build.gradle .
COPY day5/movie-service/settings.gradle .
COPY day5/movie-service/src src
RUN chmod +x gradlew
RUN ./gradlew build -x test

# Run stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app.jar"]
