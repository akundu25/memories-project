import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test"); //verifying if the token is for the same user.

      req.userId = decodedData && decodedData.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData && decodedData.sub; //sub is like an id for google auth.
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
