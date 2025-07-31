import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {

    const { success } = await ratelimit.limit("limit-key");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error", error);
    return res.status(500).json({ message: "Rate limit check failed." });
  }
};

export default rateLimiter;
