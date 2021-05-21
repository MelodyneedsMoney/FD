import time
import json
import tweepy
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
# Oauth keys
consumer_key = "E9kb6Utiyvz9aVSSW7rd9ki6R"
consumer_secret = "oXaqTgeH8XqsyJ21zui1fPscVvuRqFa0OvOFfwHqDejTx4GkpX"
access_token = "1387116142649503746-qERBQXm9qG92BgTbIGexB5A4DMQ5fB"
access_token_secret = "f3QsfseFvjTaXFkuLb3piyXXLTKcH8QSJWBrKv6UmrqLn"
# Authentication with Twitter
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

tweet_dict={
}

tweet_dict['reply']=[]

name = 'SecBlinken'
tweet_id = '1381769108316954626'

replies=[]
startTime = time.time()
with open('replie.json', 'w') as f:
    # json_writer = json.DictWriter(f, fieldnames=('text'))
    # json_writer.writeheader()
    counter = 0
    for tweet in tweepy.Cursor(api.search,q='to:'+name, result_type='mixed', timeout=999999).items(1000):
        counter += 1
        if hasattr(tweet, 'in_reply_to_status_id_str'):
            if (tweet.in_reply_to_status_id_str==tweet_id):
                print(tweet.user.screen_name)
                print(tweet.text)
                tweet_dict["reply"].append({'reply':tweet.text.replace('\n', ' ')});
                # row = {'user': tweet.user.screen_name, 'text': tweet.text.replace('\n', ' ')}
                # csv_writer.writerow(row)
                # replies.append(tweet)


        if (counter % 300 == 0):
            print("start sleeping")
            time.sleep(900)
            print("Wake up and continue")

        if (counter==300):
            json.dump(tweet_dict, f)

            #, ensure_ascii=False


