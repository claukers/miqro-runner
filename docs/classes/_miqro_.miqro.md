[miqro-runner](../README.md) › [Globals](../globals.md) › ["miqro"](../modules/_miqro_.md) › [Miqro](_miqro_.miqro.md)

# Class: Miqro

## Hierarchy

* EventEmitter

  ↳ **Miqro**

## Index

### Constructors

* [constructor](_miqro_.miqro.md#constructor)

### Properties

* [config](_miqro_.miqro.md#protected-config)
* [instanceApp](_miqro_.miqro.md#protected-instanceapp)
* [pool](_miqro_.miqro.md#private-pool)
* [restart](_miqro_.miqro.md#private-restart)
* [simpleInstance](_miqro_.miqro.md#protected-simpleinstance)
* [state](_miqro_.miqro.md#private-state)
* [defaultMaxListeners](_miqro_.miqro.md#static-defaultmaxlisteners)

### Methods

* [addListener](_miqro_.miqro.md#addlistener)
* [configure](_miqro_.miqro.md#private-configure)
* [emit](_miqro_.miqro.md#emit)
* [eventNames](_miqro_.miqro.md#eventnames)
* [getMaxListeners](_miqro_.miqro.md#getmaxlisteners)
* [listenerCount](_miqro_.miqro.md#listenercount)
* [listeners](_miqro_.miqro.md#listeners)
* [off](_miqro_.miqro.md#off)
* [on](_miqro_.miqro.md#on)
* [once](_miqro_.miqro.md#once)
* [prependListener](_miqro_.miqro.md#prependlistener)
* [prependOnceListener](_miqro_.miqro.md#prependoncelistener)
* [rawListeners](_miqro_.miqro.md#rawlisteners)
* [removeAllListeners](_miqro_.miqro.md#removealllisteners)
* [removeListener](_miqro_.miqro.md#removelistener)
* [resolveScriptPath](_miqro_.miqro.md#protected-resolvescriptpath)
* [setMaxListeners](_miqro_.miqro.md#setmaxlisteners)
* [setupAutostart](_miqro_.miqro.md#private-setupautostart)
* [simpleStart](_miqro_.miqro.md#protected-simplestart)
* [simpleStop](_miqro_.miqro.md#protected-simplestop)
* [start](_miqro_.miqro.md#start)
* [stop](_miqro_.miqro.md#stop)
* [listenerCount](_miqro_.miqro.md#static-listenercount)

## Constructors

###  constructor

\+ **new Miqro**(`config`: [IMicroConfig](../interfaces/_index_.imicroconfig.md)): *[Miqro](_miqro_.miqro.md)*

*Defined in [src/miqro.ts:25](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IMicroConfig](../interfaces/_index_.imicroconfig.md) |

**Returns:** *[Miqro](_miqro_.miqro.md)*

## Properties

### `Protected` config

• **config**: *[IMicroConfig](../interfaces/_index_.imicroconfig.md)*

*Defined in [src/miqro.ts:27](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L27)*

___

### `Protected` instanceApp

• **instanceApp**: *any*

*Defined in [src/miqro.ts:21](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L21)*

___

### `Private` pool

• **pool**: *any*

*Defined in [src/miqro.ts:23](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L23)*

___

### `Private` restart

• **restart**: *any* = null

*Defined in [src/miqro.ts:24](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L24)*

___

### `Protected` simpleInstance

• **simpleInstance**: *any* = null

*Defined in [src/miqro.ts:22](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L22)*

___

### `Private` state

• **state**: *[IMiqroState](../modules/_miqro_.md#imiqrostate)* = "stopped"

*Defined in [src/miqro.ts:25](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L25)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Miqro](_index_.miqro.md).[defaultMaxListeners](_index_.miqro.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_index_.miqro.md).[addListener](_index_.miqro.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Private` configure

▸ **configure**(`config`: any): *void*

*Defined in [src/miqro.ts:76](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | any |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Miqro](_index_.miqro.md).[emit](_index_.miqro.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Miqro](_index_.miqro.md).[eventNames](_index_.miqro.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Miqro](_index_.miqro.md).[getMaxListeners](_index_.miqro.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Miqro](_index_.miqro.md).[listenerCount](_index_.miqro.md#static-listenercount)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Miqro](_index_.miqro.md).[listeners](_index_.miqro.md#listeners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_index_.miqro.md).[off](_index_.miqro.md#off)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_index_.miqro.md).[on](_index_.miqro.md#on)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:21

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_index_.miqro.md).[once](_index_.miqro.md#once)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_index_.miqro.md).[prependListener](_index_.miqro.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_index_.miqro.md).[prependOnceListener](_index_.miqro.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [Miqro](_index_.miqro.md).[rawListeners](_index_.miqro.md#rawlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Miqro](_index_.miqro.md).[removeAllListeners](_index_.miqro.md#removealllisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_index_.miqro.md).[removeListener](_index_.miqro.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Protected` resolveScriptPath

▸ **resolveScriptPath**(): *string*

*Defined in [src/miqro.ts:72](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L72)*

**Returns:** *string*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Miqro](_index_.miqro.md).[setMaxListeners](_index_.miqro.md#setmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Private` setupAutostart

▸ **setupAutostart**(): *Promise‹void›*

*Defined in [src/miqro.ts:126](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L126)*

**Returns:** *Promise‹void›*

___

### `Protected` simpleStart

▸ **simpleStart**(): *Promise‹void›*

*Defined in [src/miqro.ts:67](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L67)*

**Returns:** *Promise‹void›*

___

### `Protected` simpleStop

▸ **simpleStop**(): *Promise‹void›*

*Defined in [src/miqro.ts:63](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L63)*

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [src/miqro.ts:32](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L32)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [src/miqro.ts:47](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L47)*

**Returns:** *Promise‹void›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [Miqro](_index_.miqro.md).[listenerCount](_index_.miqro.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
