package com.twitterclone.twitter_api;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Tweets")
public class Tweet{
    @Id
    private String tweetId;
    private String displayName;
    private String username;
    private boolean verified;
    private String tweetText;
    private String avatar;
    private String image;

    public Tweet(String displayName, String username, boolean verified, String tweetText, String avatar, String image) {
        this.displayName = displayName;
        this.username = username;
        this.verified = verified;
        this.tweetText = tweetText;
        this.avatar = avatar;
        this.image = image;
    }

    public String getDisplayName() {
        return displayName;
    }

    public String getUsername() {
        return username;
    }

    public boolean isVerified() {
        return verified;
    }

    public String getTweetText() {
        return tweetText;
    }

    public String getAvatar() {
        return avatar;
    }

    public String getImage() {
        return image;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public void setTweetText(String tweetText) {
        this.tweetText = tweetText;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
