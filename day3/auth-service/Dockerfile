# Build stage
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY day3/auth-service/gradlew .
COPY day3/auth-service/gradle gradle
COPY day3/auth-service/build.gradle .
COPY day3/auth-service/settings.gradle .
COPY day3/auth-service/src src
RUN chmod +x gradlew
RUN ./gradlew build -x test

# Run stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
