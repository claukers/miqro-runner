[miqro-runner](../README.md) › [Globals](../globals.md) › ["cli/watch"](_cli_watch_.md)

# External module: "cli/watch"

## Index

### Variables

* [logger](_cli_watch_.md#logger)
* [mode](_cli_watch_.md#mode)
* [nodes](_cli_watch_.md#nodes)
* [proc](_cli_watch_.md#let-proc)
* [restartTimeout](_cli_watch_.md#let-restarttimeout)
* [service](_cli_watch_.md#service)
* [serviceDirname](_cli_watch_.md#const-servicedirname)
* [usage](_cli_watch_.md#const-usage)

### Functions

* [restart](_cli_watch_.md#const-restart)

## Variables

###  logger

• **logger**: *Console*

*Defined in [src/cli/watch.ts:8](https://github.com/claukers/miqro-runner/blob/c7ac15b/src/cli/watch.ts#L8)*

___

###  mode

• **mode**: *string*

*Defined in [src/cli/watch.ts:8](https://github.com/claukers/miqro-runner/blob/c7ac15b/src/cli/watch.ts#L8)*

___

###  nodes

• **nodes**: *any*

*Defined in [src/cli/watch.ts:8](https://github.com/claukers/miqro-runner/blob/c7ac15b/src/cli/watch.ts#L8)*

___

### `Let` proc

• **proc**: *any* = null

*Defined in [src/cli/watch.ts:12](https://github.com/claukers/miqro-runner/blob/c7ac15b/src/cli/watch.ts#L12)*

___

### `Let` restartTimeout

• **restartTimeout**: *any* = null

*Defined in [src/cli/watch.ts:14](https://github.com/claukers/miqro-runner/blob/c7ac15b/src/cli/watch.ts#L14)*

___

###  service

• **service**: *string*

*Defined in [src/cli/watch.ts:8](https://github.com/claukers/miqro-runner/blob/c7ac15b/src/cli/watch.ts#L8)*

___

### `Const` serviceDirname

• **serviceDirname**: *string* = path.resolve(path.dirname(service))

*Defined in [src/cli/watch.ts:10](https://github.com/claukers/miqro-runner/blob/c7ac15b/src/cli/watch.ts#L10)*

___

### `Const` usage

• **usage**: *"usage: miqro-runner watch [nodes=1] [mode=simple] <microservice.js>"* = `usage: miqro-runner watch [nodes=1] [mode=simple] <microservice.js>`

*Defined in [src/cli/watch.ts:6](https://github.com/claukers/miqro-runner/blob/c7ac15b/src/cli/watch.ts#L6)*

## Functions

### `Const` restart

▸ **restart**(`silent?`: any): *void*

*Defined in [src/cli/watch.ts:15](https://github.com/claukers/miqro-runner/blob/c7ac15b/src/cli/watch.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`silent?` | any |

**Returns:** *void*
