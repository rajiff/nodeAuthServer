const router = require('express').Router();
const logger = require('../../logger');
const authCtrl = require('./authController');

router.post('/signup', function(req, res) {
  logger.debug("Request received for signup..!");

  try {
    // Add new user
    let userObj = req.body;
    authCtrl.signup(userObj, (err, result) => {
      if (err) {
        logger.error("Error in signup ERROR::", err);
        return res.status(500).send({ error: 'Something went wrong, please try later..!' });
      }

      return res.send(result);
    })
  } catch (err) {
    logger.error("Caught error in signup ERROR::", err);
    return res.status(500).send({ error: 'Something went wrong, please try later..!' });
  }
});

router.post('/login', function(req, res) {
  logger.debug("Request received for login..!");

  try {
    // Find user, check the identity and generate token for authentication if identity matches
    let credentials = req.body;
    authCtrl.login(credentials, (err, result) => {
      if (err) {
        logger.error("Error in login ERROR::", err);
        return res.status(500).send({ error: 'Something went wrong, please try later..!' });
      }

      if(result.error) {
        return res.status(403).send(result);
      }

      return res.send(result);
    })
  } catch (err) {
    logger.error("Caught error in login ERROR::", err);
    return res.status(500).send({ error: 'Something went wrong, please try later..!' });
  }
});

router.post('/logout', function(req, res) {
  logger.debug("Request received for logout..!");

  // Destroy the token or do any cleanup if you want to do

  res.send({ message: 'you logged out' });
});


module.exports = router;