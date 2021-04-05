# @miqro/runner

this module provides a helper class for launching nodejs scripts in **cluster** mode with **auto-restart** if the process **crashes**.

```javascript
const { ClusterManager } = require("@miqro/runner");
...
const pool = new ClusterManager({
  script: "./server.js",
  nodes: 4,
  disableRestart: false // defaults to false
});
pool.start().then(...).catch(...)
...
//pool.stop().then(...).catch(...)
...
```

#### cli
```usage: [CLUSTER_COUNT=1] [DISABLE_RESTART=true|false] npx @miqro/runner <script> [...args]```
