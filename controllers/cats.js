const ROOT_URL = 'https://catfact.ninja';

module.exports = {
    index,
    show
    
}

// async function query(req, res, next) {
//     console.log("cat ctrl query")
//     const factLimit = req.query.limit
//     const catFacts = await fetch(`${ROOT_URL}/facts?limit=${factLimit}`)
//     .then(res => res.json());
//     console.log(catFacts)
//     res.render('./cats/facts', { catFacts })
// };

async function show(req, res, next) {
    console.log("cat ctrl query")
    const factLimit = req.query.limit
    // Handle request to load the page, before user clicks button
    if (!factLimit) return res.render('./cats/facts', { catFacts : null });
    // Handle the request when user inputs a number and clicks button
    const catFacts = await fetch(`${ROOT_URL}/facts?limit=${factLimit}`)
        .then(res => res.json());
    res.render('./cats/facts', { catFacts })
}

async function index(req, res, next) {
    const catFact = await fetch(`${ROOT_URL}/fact`)
    .then(res => res.json());
    console.log(catFact)
    res.render('./cats/fact', { catFact })
  };