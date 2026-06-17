# Build stage
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY day7/booking-service-redis/gradlew .
COPY day7/booking-service-redis/gradle gradle
COPY day7/booking-service-redis/build.gradle .
COPY day7/booking-service-redis/settings.gradle .
COPY day7/booking-service-redis/src src
RUN chmod +x gradlew
RUN ./gradlew build -x test

# Run stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8083
ENTRYPOINT ["java", "-jar", "app.jar"]
