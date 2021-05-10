// search
module.exports = {
    index: (req, res) => {
        res.render("index");
    },
    results: (req, res) => {
        res.render("search");
    },
    // settings
    settings: (req, res) => {
        res.render("settings");
    },
    //account
    account: (req, res) => {
        res.render("account");
    }
}