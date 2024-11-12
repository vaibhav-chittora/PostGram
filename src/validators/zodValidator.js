export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      console.log(req.body);
      schema.parse(req.body);
      next();
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "ZOD Validation Error ",
        errors: error.errors,
      });
    }
  };
};
