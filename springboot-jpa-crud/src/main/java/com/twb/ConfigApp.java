//package com.twb;
//
//import org.springframework.boot.web.client.RestTemplateBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.MediaType;
//import org.springframework.http.converter.HttpMessageConverter;
//import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
//import org.springframework.web.client.RestTemplate;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.List;
//
//@Configuration
//public class ConfigApp {
//
//    @Bean
//    public RestTemplate getRestTemplate(){

//        MappingJackson2HttpMessageConverter jackson = new MappingJackson2HttpMessageConverter();
//        jackson.setSupportedMediaTypes(Arrays.asList(MediaType.APPLICATION_JSON)); // , MediaType.APPLICATION_OCTET_STREAM
//
//        return new RestTemplateBuilder()
//                .additionalMessageConverters(jackson)
//                .build();
//        RestTemplate  restTemplate = new RestTemplate();
//
//        List<HttpMessageConverter<?>> messageConverters = new ArrayList<HttpMessageConverter<?>>();
//
//        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
//        converter.setSupportedMediaTypes(Collections.singletonList(MediaType.ALL));
//        messageConverters.add(converter);
//        restTemplate.setMessageConverters(messageConverters);
//        return restTemplate;
//    }
//}
