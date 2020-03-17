[@miqro/runner](../README.md) › [Globals](../globals.md) › ["cli/watch-util"](_cli_watch_util_.md)

# Module: "cli/watch-util"

## Index

### Variables

* [logger](_cli_watch_util_.md#logger)
* [mode](_cli_watch_util_.md#mode)
* [nodes](_cli_watch_util_.md#nodes)
* [proc](_cli_watch_util_.md#let-proc)
* [restartTimeout](_cli_watch_util_.md#let-restarttimeout)
* [service](_cli_watch_util_.md#service)
* [serviceDirname](_cli_watch_util_.md#const-servicedirname)
* [usage](_cli_watch_util_.md#const-usage)

### Functions

* [restart](_cli_watch_util_.md#const-restart)
* [startWatch](_cli_watch_util_.md#const-startwatch)

## Variables

###  logger

• **logger**: *Console*

*Defined in [src/cli/watch-util.ts:8](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L8)*

___

###  mode

• **mode**: *string*

*Defined in [src/cli/watch-util.ts:8](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L8)*

___

###  nodes

• **nodes**: *any*

*Defined in [src/cli/watch-util.ts:8](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L8)*

___

### `Let` proc

• **proc**: *any* = null

*Defined in [src/cli/watch-util.ts:12](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L12)*

___

### `Let` restartTimeout

• **restartTimeout**: *any* = null

*Defined in [src/cli/watch-util.ts:14](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L14)*

___

###  service

• **service**: *string*

*Defined in [src/cli/watch-util.ts:8](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L8)*

___

### `Const` serviceDirname

• **serviceDirname**: *string* = path.resolve(path.dirname(service))

*Defined in [src/cli/watch-util.ts:10](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L10)*

___

### `Const` usage

• **usage**: *"usage: miqro-runner watch [nodes=1] [mode=simple] <microservice.js>"* = `usage: miqro-runner watch [nodes=1] [mode=simple] <microservice.js>`

*Defined in [src/cli/watch-util.ts:6](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L6)*

## Functions

### `Const` restart

▸ **restart**(`cmd`: string, `silent?`: any): *void*

*Defined in [src/cli/watch-util.ts:15](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | string |
`silent?` | any |

**Returns:** *void*

___

### `Const` startWatch

▸ **startWatch**(`cmd`: string): *void*

*Defined in [src/cli/watch-util.ts:54](https://github.com/claukers/miqro-runner/blob/c3a28f7/src/cli/watch-util.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | string |

**Returns:** *void*
