# aws-amplify-cljs

A small ClojureScript/JavaScript example app showcasing polyglot programming,
and [AWS amplify][7].

# Live Demo

CloudFront: [https://dmvs92q00feyk.cloudfront.net/][2]

Open your console and try clicking on the `Get Items` button. You should see
your request to API Gateway echoed in the console. You can see the code for this
endpoint inside of the [./awsmobilejs/backend/cloud-api/sampleLambda][4]
directory.

Try entering a username into the input field and clicking the submit button. You
should see your username logged to the console. This demonstrates our ability to
depend on _local React component libraries_ and use them in ClojureScript applications.
In this case, under the `react-lib/` directory is an NPM package written by
Gabriel called [test-idea][10]. The ClojureScript front-end requires this package
and then mounts its example form to the DOM, passing in event handlers and other
properties.

The code for the home page is at [./src/aws_amplify_cljs/core.cljs][6]. You can
see that there are calls to both the [API][8] and [Analytics][9] modules of
AWS Amplify.

The backend is written in plain JavaScript, which helps showcase that both
languages can coexist when it makes sense to do so. [express-js][5] is a
wonderfully simple HTTP server implementation. By writing the boilerplate server
setup code in JS, and the actual endpoint implementations in ClojureScript, the
cake is both eaten and had.

_Note though that even the endpoint implementations are in JS at the moment,
but the theory is sound._

### Known Issues

For reasons I'm not aware of yet, clicking `Get Items` while running the app
locally is causing some kind of credentials error. I'm still working out how
exactly AWS is handling authorization of local development environments.

# Development Setup

First, compile and watch the local [test-idea][10] React library:

```bash
cd react-lib/
npm install
npm run lib:watch
```

Next, install dependencies and start [shadow-cljs][3] watch process:

```bash
yarn install
yarn run watch

# ...
# [:app] Build completed...
```

Once the build is completed, navigate to [localhost:8080](http://localhost:8080)
and open the browser console (F12). You should see some debug output mentioning
a successful connection to the shadow-cljs websocket.

In a separate terminal, launch the REPL:

```
yarn run repl
#...
#cljs.user=>
```

Try entering the following command at the REPL prompt to ensure you're properly
connected:

```
(js/alert "Browser, can you hear me?")
```

You should see an alert dialog appear in your browser window. You're all set up!
Any code changes you make will now be hot-loaded into the app.


To summarize, we have a ClojureScript project that depends on a _local NPM package_
which exists under `react-lib`, and is called `test-idea`. We build and watch
the `test-idea` package, we build and watch the ClojureScript project, and we
started a REPL. Now, if anything changes, we'll get live updates.

# AWS Amplify Setup (deployment and backend)

Install the AWS [Amplify CLI tool][1]:

```
yarn global add awsmobile-cli

# Configure the CLI with your AWS credentials
awsmobile configure
```

### Files and commands of interest

```text
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

[1]: https://github.com/aws/awsmobile-cli
[2]: https://dmvs92q00feyk.cloudfront.net/
[3]: http://shadow-cljs.org/
[4]: ./awsmobilejs/backend/cloud-api/sampleLambda
[5]: https://expressjs.com/
[6]: ./src/aws_amplify_cljs/core.cljs
[7]: https://aws.github.io/aws-amplify/
[8]: https://aws.github.io/aws-amplify/media/api_guide
[9]: https://aws.github.io/aws-amplify/media/analytics_guide
[10]: https://github.com/Gabryk/TestIdea
