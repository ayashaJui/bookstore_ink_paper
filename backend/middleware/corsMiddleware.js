const corsMiddleware = (req, res, next) => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  } else {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://inkandpaper-frontend.onrender.com"
    );
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

export default corsMiddleware;
