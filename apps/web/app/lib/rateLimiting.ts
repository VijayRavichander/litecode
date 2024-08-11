import Redis from 'ioredis'

function getRedisClient() {
    const redis = new Redis(process.env.REDISURL || "")
    return redis;
}

export async function rateLimit(
    userId: string, 
    limit: number, 
    duration: number
): Promise<boolean> {

    console.log(userId)
    const key = `rate_limit:${userId}`
    const currentTime = Math.floor(Date.now() / 1000);


    try{

        const redis = getRedisClient();

        const transaction = redis.multi();
        // Remove values of key outside the rateLimiting Window
        transaction.zremrangebyscore(key, 0, currentTime - duration);
        transaction.zadd(key, currentTime, currentTime)
        transaction.zcard(key)

        const results = await transaction.exec();

        const requestCount = results?.[2]?.[1] as number;

        console.log(results)
        console.log(requestCount)

        if(requestCount > limit){
            console.log("Rate Limited")
            return false;
        }

        await redis.expire(key, duration + 1);
        return true;

    }catch(error){
        console.error("Rate limiting error:", error);
        return false;
    }
}