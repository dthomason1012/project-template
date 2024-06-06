const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: process.env.LOTR_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.LOTR_API_KEY}`,
  },
});

const getAllBooks = (req, res) => {
  axiosInstance
    .get('/book')
    .then((response) => res.status(200).send(response.data))
    .catch((error) => res.status(400).send({ message: error }));
};

const getSingleBook = (req, res) => {
  const { id } = req.params;
  axiosInstance
    .get(`/book/${id}`)
    .then((response) => res.status(200).send(response.data))
    .catch((error) => res.status(404).send({ message: error }));
};

module.exports = {
  getAllBooks,
  getSingleBook,
};
