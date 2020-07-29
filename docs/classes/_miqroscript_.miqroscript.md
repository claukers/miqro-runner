[@miqro/runner](../README.md) › [Globals](../globals.md) › ["miqroscript"](../modules/_miqroscript_.md) › [MiqroScript](_miqroscript_.miqroscript.md)

# Class: MiqroScript

## Hierarchy

  ↳ [Miqro](_miqro_.miqro.md)

  ↳ **MiqroScript**

## Index

### Constructors

* [constructor](_miqroscript_.miqroscript.md#constructor)

### Properties

* [config](_miqroscript_.miqroscript.md#protected-config)
* [instanceApp](_miqroscript_.miqroscript.md#protected-instanceapp)
* [simpleInstance](_miqroscript_.miqroscript.md#protected-simpleinstance)

### Methods

* [addListener](_miqroscript_.miqroscript.md#addlistener)
* [emit](_miqroscript_.miqroscript.md#emit)
* [eventNames](_miqroscript_.miqroscript.md#eventnames)
* [getMaxListeners](_miqroscript_.miqroscript.md#getmaxlisteners)
* [listenerCount](_miqroscript_.miqroscript.md#listenercount)
* [listeners](_miqroscript_.miqroscript.md#listeners)
* [off](_miqroscript_.miqroscript.md#off)
* [on](_miqroscript_.miqroscript.md#on)
* [once](_miqroscript_.miqroscript.md#once)
* [prependListener](_miqroscript_.miqroscript.md#prependlistener)
* [prependOnceListener](_miqroscript_.miqroscript.md#prependoncelistener)
* [rawListeners](_miqroscript_.miqroscript.md#rawlisteners)
* [removeAllListeners](_miqroscript_.miqroscript.md#removealllisteners)
* [removeListener](_miqroscript_.miqroscript.md#removelistener)
* [resolveScriptPath](_miqroscript_.miqroscript.md#protected-resolvescriptpath)
* [setMaxListeners](_miqroscript_.miqroscript.md#setmaxlisteners)
* [simpleStart](_miqroscript_.miqroscript.md#protected-simplestart)
* [simpleStop](_miqroscript_.miqroscript.md#protected-simplestop)
* [start](_miqroscript_.miqroscript.md#start)
* [stop](_miqroscript_.miqroscript.md#stop)

## Constructors

###  constructor

\+ **new MiqroScript**(`config`: [MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md)): *[MiqroScript](_miqroscript_.miqroscript.md)*

*Inherited from [Miqro](_miqro_.miqro.md).[constructor](_miqro_.miqro.md#constructor)*

*Defined in [src/miqro.ts:27](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md) |

**Returns:** *[MiqroScript](_miqroscript_.miqroscript.md)*

## Properties

### `Protected` config

• **config**: *[MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md)*

*Inherited from [Miqro](_miqro_.miqro.md).[config](_miqro_.miqro.md#protected-config)*

*Defined in [src/miqro.ts:29](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L29)*

___

### `Protected` instanceApp

• **instanceApp**: *[RunInstanceReturn](../interfaces/_loader_.runinstancereturn.md) | undefined*

*Inherited from [Miqro](_miqro_.miqro.md).[instanceApp](_miqro_.miqro.md#protected-instanceapp)*

*Defined in [src/miqro.ts:23](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L23)*

___

### `Protected` simpleInstance

• **simpleInstance**: *object | undefined*

*Inherited from [Miqro](_miqro_.miqro.md).[simpleInstance](_miqro_.miqro.md#protected-simpleinstance)*

*Defined in [src/miqro.ts:24](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L24)*

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

*Overrides [Miqro](_miqro_.miqro.md).[resolveScriptPath](_miqro_.miqro.md#protected-resolvescriptpath)*

*Defined in [src/miqroscript.ts:15](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqroscript.ts#L15)*

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

### `Protected` simpleStart

▸ **simpleStart**(): *Promise‹void›*

*Overrides [Miqro](_miqro_.miqro.md).[simpleStart](_miqro_.miqro.md#protected-simplestart)*

*Defined in [src/miqroscript.ts:10](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqroscript.ts#L10)*

**Returns:** *Promise‹void›*

___

### `Protected` simpleStop

▸ **simpleStop**(): *Promise‹void›*

*Overrides [Miqro](_miqro_.miqro.md).[simpleStop](_miqro_.miqro.md#protected-simplestop)*

*Defined in [src/miqroscript.ts:6](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqroscript.ts#L6)*

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [Miqro](_miqro_.miqro.md).[start](_miqro_.miqro.md#start)*

*Defined in [src/miqro.ts:34](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L34)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [Miqro](_miqro_.miqro.md).[stop](_miqro_.miqro.md#stop)*

*Defined in [src/miqro.ts:49](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/miqro.ts#L49)*

**Returns:** *Promise‹void›*
