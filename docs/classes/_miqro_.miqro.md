[@miqro/runner](../README.md) › [Globals](../globals.md) › ["miqro"](../modules/_miqro_.md) › [Miqro](_miqro_.miqro.md)

# Class: Miqro

## Hierarchy

* EventEmitter

  ↳ **Miqro**

  ↳ [MiqroScript](_miqroscript_.miqroscript.md)

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
* [errorMonitor](_miqro_.miqro.md#static-errormonitor)

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
* [setupAutostartAndBroadcast](_miqro_.miqro.md#private-setupautostartandbroadcast)
* [simpleStart](_miqro_.miqro.md#protected-simplestart)
* [simpleStop](_miqro_.miqro.md#protected-simplestop)
* [start](_miqro_.miqro.md#start)
* [stop](_miqro_.miqro.md#stop)
* [listenerCount](_miqro_.miqro.md#static-listenercount)

## Constructors

###  constructor

\+ **new Miqro**(`config`: [MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md)): *[Miqro](_miqro_.miqro.md)*

*Overrides void*

*Defined in [src/miqro.ts:27](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md) |

**Returns:** *[Miqro](_miqro_.miqro.md)*

## Properties

### `Protected` config

• **config**: *[MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md)*

*Defined in [src/miqro.ts:29](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L29)*

___

### `Protected` instanceApp

• **instanceApp**: *[RunInstanceReturn](../interfaces/_loader_.runinstancereturn.md) | undefined*

*Defined in [src/miqro.ts:23](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L23)*

___

### `Private` pool

• **pool**: *Pool‹any› | undefined*

*Defined in [src/miqro.ts:25](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L25)*

___

### `Private` restart

• **restart**: *Timeout | undefined*

*Defined in [src/miqro.ts:26](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L26)*

___

### `Protected` simpleInstance

• **simpleInstance**: *object | undefined*

*Defined in [src/miqro.ts:24](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L24)*

___

### `Private` state

• **state**: *[MiqroStateType](../modules/_miqro_.md#miqrostatetype)* = "stopped"

*Defined in [src/miqro.ts:27](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L27)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Miqro](_miqro_.miqro.md).[defaultMaxListeners](_miqro_.miqro.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:45

___

### `Static` errorMonitor

▪ **errorMonitor**: *keyof symbol*

*Inherited from [Miqro](_miqro_.miqro.md).[errorMonitor](_miqro_.miqro.md#static-errormonitor)*

Defined in node_modules/@types/node/events.d.ts:55

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[addListener](_miqro_.miqro.md#addlistener)*

Defined in node_modules/@types/node/events.d.ts:62

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

▸ **configure**(`config`: [MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md)): *void*

*Defined in [src/miqro.ts:95](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Miqro](_miqro_.miqro.md).[emit](_miqro_.miqro.md#emit)*

Defined in node_modules/@types/node/events.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Miqro](_miqro_.miqro.md).[eventNames](_miqro_.miqro.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:77

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Miqro](_miqro_.miqro.md).[getMaxListeners](_miqro_.miqro.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:69

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Miqro](_miqro_.miqro.md).[listenerCount](_miqro_.miqro.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Miqro](_miqro_.miqro.md).[listeners](_miqro_.miqro.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[off](_miqro_.miqro.md#off)*

Defined in node_modules/@types/node/events.d.ts:66

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

*Inherited from [Miqro](_miqro_.miqro.md).[on](_miqro_.miqro.md#on)*

Defined in node_modules/@types/node/events.d.ts:63

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

*Inherited from [Miqro](_miqro_.miqro.md).[once](_miqro_.miqro.md#once)*

Defined in node_modules/@types/node/events.d.ts:64

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

*Inherited from [Miqro](_miqro_.miqro.md).[prependListener](_miqro_.miqro.md#prependlistener)*

Defined in node_modules/@types/node/events.d.ts:75

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

*Inherited from [Miqro](_miqro_.miqro.md).[prependOnceListener](_miqro_.miqro.md#prependoncelistener)*

Defined in node_modules/@types/node/events.d.ts:76

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

*Inherited from [Miqro](_miqro_.miqro.md).[rawListeners](_miqro_.miqro.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[removeAllListeners](_miqro_.miqro.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[removeListener](_miqro_.miqro.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:65

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

*Defined in [src/miqro.ts:91](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L91)*

**Returns:** *string*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[setMaxListeners](_miqro_.miqro.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Private` setupAutostartAndBroadcast

▸ **setupAutostartAndBroadcast**(): *Promise‹void›*

*Defined in [src/miqro.ts:145](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L145)*

**Returns:** *Promise‹void›*

___

### `Protected` simpleStart

▸ **simpleStart**(): *Promise‹void›*

*Defined in [src/miqro.ts:86](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L86)*

**Returns:** *Promise‹void›*

___

### `Protected` simpleStop

▸ **simpleStop**(): *Promise‹void›*

*Defined in [src/miqro.ts:65](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L65)*

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [src/miqro.ts:34](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L34)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [src/miqro.ts:49](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L49)*

**Returns:** *Promise‹void›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [Miqro](_miqro_.miqro.md).[listenerCount](_miqro_.miqro.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:44

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
