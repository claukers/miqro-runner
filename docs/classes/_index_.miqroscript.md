[miqro-runner](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [MiqroScript](_index_.miqroscript.md)

# Class: MiqroScript

## Hierarchy

  ↳ [Miqro](_index_.miqro.md)

  ↳ **MiqroScript**

## Index

### Constructors

* [constructor](_index_.miqroscript.md#constructor)

### Properties

* [config](_index_.miqroscript.md#protected-config)
* [instanceApp](_index_.miqroscript.md#protected-instanceapp)
* [simpleInstance](_index_.miqroscript.md#protected-simpleinstance)
* [defaultMaxListeners](_index_.miqroscript.md#static-defaultmaxlisteners)

### Methods

* [addListener](_index_.miqroscript.md#addlistener)
* [emit](_index_.miqroscript.md#emit)
* [eventNames](_index_.miqroscript.md#eventnames)
* [getMaxListeners](_index_.miqroscript.md#getmaxlisteners)
* [listenerCount](_index_.miqroscript.md#listenercount)
* [listeners](_index_.miqroscript.md#listeners)
* [off](_index_.miqroscript.md#off)
* [on](_index_.miqroscript.md#on)
* [once](_index_.miqroscript.md#once)
* [prependListener](_index_.miqroscript.md#prependlistener)
* [prependOnceListener](_index_.miqroscript.md#prependoncelistener)
* [rawListeners](_index_.miqroscript.md#rawlisteners)
* [removeAllListeners](_index_.miqroscript.md#removealllisteners)
* [removeListener](_index_.miqroscript.md#removelistener)
* [resolveScriptPath](_index_.miqroscript.md#protected-resolvescriptpath)
* [setMaxListeners](_index_.miqroscript.md#setmaxlisteners)
* [simpleStart](_index_.miqroscript.md#protected-simplestart)
* [simpleStop](_index_.miqroscript.md#protected-simplestop)
* [start](_index_.miqroscript.md#start)
* [stop](_index_.miqroscript.md#stop)
* [listenerCount](_index_.miqroscript.md#static-listenercount)

## Constructors

###  constructor

\+ **new MiqroScript**(`config`: [IMicroConfig](../interfaces/_index_.imicroconfig.md)): *[MiqroScript](_index_.miqroscript.md)*

*Inherited from [Miqro](_index_.miqro.md).[constructor](_index_.miqro.md#constructor)*

*Defined in [src/miqro.ts:25](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IMicroConfig](../interfaces/_index_.imicroconfig.md) |

**Returns:** *[MiqroScript](_index_.miqroscript.md)*

## Properties

### `Protected` config

• **config**: *[IMicroConfig](../interfaces/_index_.imicroconfig.md)*

*Inherited from [Miqro](_index_.miqro.md).[config](_index_.miqro.md#protected-config)*

*Defined in [src/miqro.ts:27](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L27)*

___

### `Protected` instanceApp

• **instanceApp**: *any*

*Inherited from [Miqro](_index_.miqro.md).[instanceApp](_index_.miqro.md#protected-instanceapp)*

*Defined in [src/miqro.ts:21](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L21)*

___

### `Protected` simpleInstance

• **simpleInstance**: *any* = null

*Inherited from [Miqro](_index_.miqro.md).[simpleInstance](_index_.miqro.md#protected-simpleinstance)*

*Defined in [src/miqro.ts:22](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L22)*

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

*Overrides [Miqro](_index_.miqro.md).[resolveScriptPath](_index_.miqro.md#protected-resolvescriptpath)*

*Defined in [src/miqroscript.ts:14](https://github.com/claukers/miqro-runner/blob/9711821/src/miqroscript.ts#L14)*

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

### `Protected` simpleStart

▸ **simpleStart**(): *Promise‹void›*

*Overrides [Miqro](_index_.miqro.md).[simpleStart](_index_.miqro.md#protected-simplestart)*

*Defined in [src/miqroscript.ts:10](https://github.com/claukers/miqro-runner/blob/9711821/src/miqroscript.ts#L10)*

**Returns:** *Promise‹void›*

___

### `Protected` simpleStop

▸ **simpleStop**(): *Promise‹void›*

*Overrides [Miqro](_index_.miqro.md).[simpleStop](_index_.miqro.md#protected-simplestop)*

*Defined in [src/miqroscript.ts:6](https://github.com/claukers/miqro-runner/blob/9711821/src/miqroscript.ts#L6)*

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [Miqro](_index_.miqro.md).[start](_index_.miqro.md#start)*

*Defined in [src/miqro.ts:32](https://github.com/claukers/miqro-runner/blob/9711821/src/miqro.ts#L32)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [Miqro](_index_.miqro.md).[stop](_index_.miqro.md#stop)*

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
