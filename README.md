# Q&A

## Questions:
1. What is a URL shortening system?
2. What's the main value? Who needs such a system and why?
3. Describe The main mechanism of work and system components.
4. What do you think are the main challenges in implementing and running the system
5. Try to suggest some ideas for advanced features.

## Answers:

1. URL shortening system is a simple tool used for converting long url to shorter one. It's a servis like https://tinyurl.com or https://bitly.com. For example if we use tinyurl service to make some url shorter we will get some url like this: https://bit.ly/3msBvg3. When the user hits the previous url, they are redirected to the original/long url, in this case https://www.google.com/.
2. There are lot of benefits url shortening system provides. Some of theme are:
   1. For example some platforms like Twitter have lited number of character you can use, and if you use tiny urls you get a additional free characters.
   2. Short urls are more streamlined in appearance, so if you are trying to build a brand and are doing through a social media campaign,having all your links be the same length and appear very similar is crucial.
   3. Easier to replicate. Nowadays it's rare to retype url, usually we use copy and paste functions, but if someone decides to visit some link by typing it to address bar, it's much easier if url is shorter.
   4. Another asset of using an online tool to shorten a link is that clicks on the link can be tracked.
   5. One more asset is using it for sharing restricted urls. This is not allways a good thing.

3. Main mechanism is based on providing a long url and getting short url back. After that you can navigate to short url which will redirect you to original/long url. What we need to take in consideration before we start creating service like this. Firstly, we need to calculate how many different urls we need to create. For example, we can say that we want to use 6 characters after url, that wil provide around 10 million of different short urls, but using 7 characters will provide 3.5 trillion. If we consider calling service 1000 times in secound, 3.5 trillion different urls we will use in more then 100 years. That seems to be acceptable. So we can say that using 7 or more charcters is enough, also we need to consider that this is service for shortening url, so we don't want to have 20 or 30 characters after site url.
4. The main challenge will be creating a unique short url and prevent making duplicates or creating short urls for same long urls. There are a lot of ways we could make this system works, but in some cases we could get collisons in short urls. If we get short url collison, that means that we have same short url for two or more long urls. For example if users hit short url, it needs to take them allways to same original url, if it takes them onice to one and after that to another url that means that in DB we have same short url for two differen long urls.
5. How can we implement url shortening system? There are a different techniques. For example:
   1. Generate a random tiny url and check DB
      1. Create a random tiny url, check if it exists in DB and if it does not exist add it to DB. Possible collision.
      2. Create a random tiny url and use put if absent, this is a good way but not all nosql systems have put if absent function.
   2. Using MD5 hash, and selecting first 7 charcter(first 43 bits). Unlikely to collison happen but possible. Using this with tehnique from 1.1. will provide acceptable protection of creating a short url duplicates.
   3. Using Counters.