[@miqro/runner](../README.md) › [Globals](../globals.md) › ["cli/watch-util"](_cli_watch_util_.md)

# Module: "cli/watch-util"

## Index

### Variables

* [TIMEOUT](_cli_watch_util_.md#const-timeout)
* [logger](_cli_watch_util_.md#logger)
* [mode](_cli_watch_util_.md#mode)
* [nodes](_cli_watch_util_.md#nodes)
* [proc](_cli_watch_util_.md#let-proc)
* [restartTimeout](_cli_watch_util_.md#let-restarttimeout)
* [service](_cli_watch_util_.md#service)
* [serviceDirname](_cli_watch_util_.md#const-servicedirname)
* [usage](_cli_watch_util_.md#const-usage)
* [watches](_cli_watch_util_.md#const-watches)

### Functions

* [restart](_cli_watch_util_.md#const-restart)
* [startWatch](_cli_watch_util_.md#const-startwatch)
* [walkSync](_cli_watch_util_.md#const-walksync)
* [watchTree](_cli_watch_util_.md#const-watchtree)

## Variables

### `Const` TIMEOUT

• **TIMEOUT**: *5000* = 5000

*Defined in [src/cli/watch-util.ts:15](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L15)*

___

###  logger

• **logger**: *any*

*Defined in [src/cli/watch-util.ts:8](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L8)*

___

###  mode

• **mode**: *string*

*Defined in [src/cli/watch-util.ts:8](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L8)*

___

###  nodes

• **nodes**: *number*

*Defined in [src/cli/watch-util.ts:8](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L8)*

___

### `Let` proc

• **proc**: *any* = null

*Defined in [src/cli/watch-util.ts:12](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L12)*

___

### `Let` restartTimeout

• **restartTimeout**: *any* = null

*Defined in [src/cli/watch-util.ts:17](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L17)*

___

###  service

• **service**: *string*

*Defined in [src/cli/watch-util.ts:8](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L8)*

___

### `Const` serviceDirname

• **serviceDirname**: *string* = statSync(resolve(service)).isDirectory() ? resolve(service) : resolve(dirname(service))

*Defined in [src/cli/watch-util.ts:10](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L10)*

___

### `Const` usage

• **usage**: *"usage: miqro-runner watch [nodes=1] [mode=simple] <microservice.js>"* = `usage: miqro-runner watch [nodes=1] [mode=simple] <microservice.js>`

*Defined in [src/cli/watch-util.ts:6](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L6)*

___

### `Const` watches

• **watches**: *any[]* = []

*Defined in [src/cli/watch-util.ts:14](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L14)*

## Functions

### `Const` restart

▸ **restart**(`cmd`: string, `silent?`: any): *void*

*Defined in [src/cli/watch-util.ts:41](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | string |
`silent?` | any |

**Returns:** *void*

___

### `Const` startWatch

▸ **startWatch**(`cmd`: string): *void*

*Defined in [src/cli/watch-util.ts:105](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | string |

**Returns:** *void*

___

### `Const` walkSync

▸ **walkSync**(`dir`: any, `list`: string[]): *string[]*

*Defined in [src/cli/watch-util.ts:19](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dir` | any | - |
`list` | string[] | [] |

**Returns:** *string[]*

___

### `Const` watchTree

▸ **watchTree**(`dirname`: string, `cb`: function): *void*

*Defined in [src/cli/watch-util.ts:30](https://github.com/claukers/miqro-runner/blob/ac4b2c9/src/cli/watch-util.ts#L30)*

**Parameters:**

▪ **dirname**: *string*

▪ **cb**: *function*

▸ (`event`: string, `filename`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`filename` | string |

**Returns:** *void*
