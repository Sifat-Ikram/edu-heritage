import jwt from "jsonwebtoken";

export const generateTokens = (user) => {
  const payload = { id: user._id, email: user.email };

  const accessToken = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });

  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });

  return {
    accessToken,
    refreshToken,
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  };
};
