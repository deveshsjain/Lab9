const express = require("express");
const router = express.Router();
const data = require("../data");
const palindromeData = data.palindrome;

router.get("/", (req, res) => {
    res.render('welcome/index');
});

router.post("/", async (req, res) => {
    let palindromeInput = req.body;

    // if (!palindromeInput.phrase) {
    //     res.status(400).send({ error: "Please provide data" });
    //     return;
    // }
    // if (!palindromeInput.phrase) {
    //     res.status(400).send({ error: "Please provide data" });
    //     return;
    // }

    try {
        const newPal = await palindromeData.checkPalindrome(palindromeInput.phrase);
         res.render('welcome/result', { check: newPal, inputPhrase: palindromeInput.phrase });
    }
    catch (e) {
        res.render("welcome/result", { error: e });
        return;
    }
    res.render("welcome/result", {
        heck: newPal, inputPhrase: palindromeInput.phrase
    });
});


module.exports = router;
