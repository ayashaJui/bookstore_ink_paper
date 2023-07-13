const corsMiddleware = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://inkandpaper-frontend.onrender.com"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

export default corsMiddleware;
