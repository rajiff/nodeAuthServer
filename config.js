let config = {
	PORT: (process.env.PORT || 3000),
	LOG_FILE: (process.env.LOG_FILE || 'application.log'),
	MONGO: {
		MONGO_URL: (process.env.MONGO_URL || 'mongodb://localhost:27017/spasecurity')
	}
}

module.exports = config;