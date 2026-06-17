package com.example.auth_service.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.net.URI;

@Configuration
public class DataSourceConfig {

    @Value("${SPRING_DATASOURCE_URL:}")
    private String datasourceUrl;

    @Value("${DB_HOST:localhost}")
    private String dbHost;

    @Value("${DB_PORT:5432}")
    private String dbPort;

    @Value("${DB_NAME:cineverse}")
    private String dbName;

    @Value("${SPRING_DATASOURCE_USERNAME:postgres}")
    private String dbUser;

    @Value("${SPRING_DATASOURCE_PASSWORD:postgres}")
    private String dbPassword;

    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setUsername(dbUser);
        config.setPassword(dbPassword);

        String jdbcUrl;
        // If SPRING_DATASOURCE_URL is set to postgres:// format, convert it
        if (datasourceUrl != null && datasourceUrl.startsWith("postgres://")) {
            try {
                URI uri = new URI(datasourceUrl);
                String host = uri.getHost();
                int port = uri.getPort() == -1 ? 5432 : uri.getPort();
                String db = uri.getPath().substring(1); // remove leading /
                String[] userInfo = uri.getUserInfo().split(":");
                config.setUsername(userInfo[0]);
                config.setPassword(userInfo[1]);
                jdbcUrl = "jdbc:postgresql://" + host + ":" + port + "/" + db + "?sslmode=require";
            } catch (Exception e) {
                jdbcUrl = "jdbc:postgresql://" + dbHost + ":" + dbPort + "/" + dbName;
            }
        } else if (datasourceUrl != null && datasourceUrl.startsWith("jdbc:")) {
            jdbcUrl = datasourceUrl;
        } else {
            jdbcUrl = "jdbc:postgresql://" + dbHost + ":" + dbPort + "/" + dbName;
        }

        config.setJdbcUrl(jdbcUrl);
        config.setDriverClassName("org.postgresql.Driver");
        return new HikariDataSource(config);
    }
}
