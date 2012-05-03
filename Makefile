.PHONY: test
test:
	npm test

.PHONY: deploy
deploy:
	git push heroku master
