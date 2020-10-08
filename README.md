# @miqro/runner

this module provides a simple cli for running nodejs apps in development.

```npx miqro runner:<command> [args..]```

```
usage: npx miqro runner:<command> [args]
Available commands:
	start		starts a microservice
	start-script	starts a script
	watch		starts a microservice in watch mode on the service dir
	watch-script	starts a script in watch mode on the script dir
	version		prints miqro-runner version.
```

##### watch mode

```npx miqro runner:watch service.js```

or

```npx miqro runner:watch-script service.js```

##### cluster mode

in ***cluster mode*** the app will be ***restarted*** if it crashes. for stopping the app send a ```SIGINT``` or similar signal to the process or see the **Miqro::stop(...)** method if created by the API.

```npx miqro runner:start <CLUSTER_COUNT> cluster service.js```

or

```npx miqro runner:start-script <CLUSTER_COUNT> cluster service.js```

##### simple mode

```npx miqro runner:start service.js```

or

```npx miqro runner:start-script service.js```
