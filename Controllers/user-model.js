const getInfo = (req, res) => {
    if (movies) return res.send({ movies });
    else {
        res.status(404).send({ Message: "NOPE!" });
    }
};


