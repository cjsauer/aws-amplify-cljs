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

# AWS Amplify Setup

Install the AWS Amplify CLI tool:

```
sudo yarn global add awsmobile-cli --prefix /usr/local

# Configure the CLI
awsmobile configure
```

### Files and commands of interest

```
awsmobilejs/.awsmobile
  is the workspace of awsmobile-cli, please do not modify its contents

awsmobilejs/#current-backend-info
  contains information of the backend awsmobile project from the last
  synchronization with the cloud

awsmobilejs/backend
  is where you develop the codebase of the backend awsmobile project

awsmobile console
  opens the web console of the backend awsmobile project

awsmobile run
  pushes the latest development of the backend awsmobile project to the cloud,
  and runs the frontend application locally

awsmobile publish
  pushes the latest development of the backend awsmobile project to the cloud,
  and publishes the frontend application to aws S3 for hosting
```
