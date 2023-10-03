package com.dhanusu.security.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.context.annotation.Bean;

@Configuration
public class CorsConfiguration {
    @Bean
    public WebMvcConfigurer crosConfigurer(){
        return new WebMvcConfigurer() {

     @Override
    public void addCorsMappings(CorsRegistry registry) {
        
       registry.addMapping("/**");
            
        }
        };

    }
    
}
