package com.twitterclone.twitter_api;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TwitterApiApplication {

	private TweetRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(TwitterApiApplication.class, args);
	}
}
