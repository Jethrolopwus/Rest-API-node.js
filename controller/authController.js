const signup = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Signup endpoint is working"
    });
};

module.exports = { signup };