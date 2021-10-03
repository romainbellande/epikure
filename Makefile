.DEFAULT_GOAL = help
## —— trivia ———————————————————————————————————————————————————————————————————————————————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— certs ————————————————————————————————————————————————————————————————————————————————————————————————————————————
certs:
	mkcert -cert-file certs/local-cert.pem -key-file certs/local-key.pem "epikure.localhost" "*.epikure.localhost"

## —— galeon-api ———————————————————————————————————————————————————————————————————————————————————————————————————————
typeorm:
	docker-compose exec api yarn typeorm:exec $(command)

migration-generate: ## [galeon-api] generate migration
	make typeorm command="migration:generate -n $(name) -d src/migrations"

migration-revert: ## [galeon-api] revert migration
	make typeorm command="migration:revert"

migration-run: ## [galeon-api] run migration
	make typeorm command="migration:run"

.PHONY: migration-generate migration-revert migration-run certs
