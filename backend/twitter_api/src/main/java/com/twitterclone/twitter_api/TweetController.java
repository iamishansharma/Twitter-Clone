package com.twitterclone.twitter_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class TweetController {

    @Autowired
    private TweetRepository tweetRepository;

    @GetMapping("/tweets")
    public List<Tweet> getAllTweets()
    {
        List<Tweet> allTweets =  tweetRepository.findAll();
        return allTweets;
    }

    @GetMapping("/tweet/{tweetId}")
    public Optional<Tweet> getTweet(@PathVariable String tweetId)
    {
        return tweetRepository.findById(tweetId);
    }

    @DeleteMapping("/tweet/{tweetId}")
    public String deleteTweet(@PathVariable String tweetId)
    {
        tweetRepository.deleteById(tweetId);
        return "Tweet Deleted with id: " + tweetId;
    }

    @PostMapping("/tweet")
    public String postTweet(@RequestBody Tweet newTweet)
    {
        tweetRepository.save(newTweet);
        return "New Tweet added with id: " + newTweet.getTweetId();
    }
}
