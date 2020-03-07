const { crescente } = require('./helpers');

const getNumerosMegaSena = () =>
    Array(6)
        .fill(0)
        .map(() => parseInt(Math.random() * 60 + 1))
        .sort(crescente);

module.exports = getNumerosMegaSena;
