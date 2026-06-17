# Build stage
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY day4/api-gateway/gradlew .
COPY day4/api-gateway/gradle gradle
COPY day4/api-gateway/build.gradle .
COPY day4/api-gateway/settings.gradle .
COPY day4/api-gateway/src src
RUN chmod +x gradlew
RUN ./gradlew build -x test

# Run stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
