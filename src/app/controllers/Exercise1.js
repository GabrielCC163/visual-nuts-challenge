module.exports = {
  async index(req, res) {
    try {
      const ret = [];

      let { number = 100 } = req.query;

      number = number < 1 ? 1 : number;

      for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log('Visual Nuts');
          ret.push({ number: i, print: 'Visual Nuts' });
        } else if (i % 3 === 0) {
          console.log('Visual');
          ret.push({ number: i, print: 'Visual' });
        } else if (i % 5 === 0) {
          console.log('Nuts');
          ret.push({ number: i, print: 'Nuts' });
        } else {
          console.log(i);
          ret.push({ number: i });
        }
      }

      return res.status(200).json(ret);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },
};
