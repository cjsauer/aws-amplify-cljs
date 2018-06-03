# Development Setup

Install dependencies and start `shadow-cljs` watch process:

```
yarn install
yarn run watch
```

Navigate to [localhost:8080](http://localhost:8080)

Now connect to the nrepl server in your editor of choice. Once connected,
switch over to the cljs repl:

```
(shadow/repl :app)
```
