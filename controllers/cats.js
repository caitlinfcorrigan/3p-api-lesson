const ROOT_URL = 'https://catfact.ninja';

module.exports = {
    index
}


async function index(req, res, next) {
    console.log("catfact controller")
    const catFact = await fetch(`${ROOT_URL}/fact`)
    .then(res => res.json());
    res.render('./cats/fact', { catFact })
  };