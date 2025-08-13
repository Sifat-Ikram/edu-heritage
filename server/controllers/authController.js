import User from "../models/user.js";
import { generateTokens } from "../utils/token.js";

// REGISTER
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = await User.create({ username, email, password });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password)))
    return res.status(401).json({ error: "Invalid credentials" });

  const tokens = generateTokens(user);
  res.json({ message: "Login successful", ...tokens });
};

//refresh-token
export const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken)
    return res.status(401).json({ error: "Refresh token missing" });

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) return res.status(403).json({ error: "Invalid refresh token" });

    const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, {
      expiresIn: "15m",
    });

    res.json({ accessToken, expiresIn: 900 }); // 15 minutes = 900 seconds
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired refresh token" });
  }
};
