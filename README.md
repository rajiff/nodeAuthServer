- Server Sessions
	- sessions are created, when user logs in
	- Each subsequent request, server has to go to session DB and validate if request is authenticated

- Cookies


C10M Problem (concurrent access to web server in a specific short time frame)
- Nodejs handle


(100 connection / second ) X 2
- XHR - requesting data from server


Request came
- Go to session store (stateful authentication)
- query session id row
- extract the data and verify user credentials/session
- now go to actual request


JSON Webtoken - State less

1. Provide credentials
	- Go to DB, find the user of matching credentials
	- Verify the credentials against what is given
	- If identity matches, provide an authenticated token (string)
	- Return response with that token
		- Client should store this token with it

2. New request by client
	- Provide the token issued earlier (during credentials validation)
	- Extract the token (unpack) and verify if that token was issued by me (server) only
	- If it not valid then reject the request
	- if valid, proceed to process the request

Question
- If server crashes or closed or restarted after issuing the token, token is no more valid
	- token is valid for a x amount seconds/minutes/days

- validating or verifying the token still takes times, is it not still slow
	- This is only computation time, no IO complexity

- Multiple web servers issuing token, how LB scenarios


Session Tracking
- Whether current user authenticated or not
- What is the role & access
- decode on client side

- Life time of a session you want for user on client?
	- Session life time
		- localstorage
		- cookie
		- sessionStorage
		- in-memory


Don't do this way, it causes SQL injection
`Select * from collection.mycollection where name = ?`
