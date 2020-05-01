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

*Defined in [src/miqro.ts:25](https://github.com/claukers/miqro-runner/blob/c5aed02/src/miqro.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md) |

**Returns:** *[MiqroScript](_miqroscript_.miqroscript.md)*

## Properties

### `Protected` config

• **config**: *[MicroConfigInterface](../interfaces/_miqro_.microconfiginterface.md)*

*Inherited from [Miqro](_miqro_.miqro.md).[config](_miqro_.miqro.md#protected-config)*

*Defined in [src/miqro.ts:27](https://github.com/claukers/miqro-runner/blob/c5aed02/src/miqro.ts#L27)*

___

### `Protected` instanceApp

• **instanceApp**: *any*

*Inherited from [Miqro](_miqro_.miqro.md).[instanceApp](_miqro_.miqro.md#protected-instanceapp)*

*Defined in [src/miqro.ts:21](https://github.com/claukers/miqro-runner/blob/c5aed02/src/miqro.ts#L21)*

___

### `Protected` simpleInstance

• **simpleInstance**: *any* = null

*Inherited from [Miqro](_miqro_.miqro.md).[simpleInstance](_miqro_.miqro.md#protected-simpleinstance)*

*Defined in [src/miqro.ts:22](https://github.com/claukers/miqro-runner/blob/c5aed02/src/miqro.ts#L22)*

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[addListener](_miqro_.miqro.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:554

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

Defined in node_modules/@types/node/globals.d.ts:564

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

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Miqro](_miqro_.miqro.md).[getMaxListeners](_miqro_.miqro.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Miqro](_miqro_.miqro.md).[listenerCount](_miqro_.miqro.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Miqro](_miqro_.miqro.md).[listeners](_miqro_.miqro.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[off](_miqro_.miqro.md#off)*

Defined in node_modules/@types/node/globals.d.ts:558

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

Defined in node_modules/@types/node/globals.d.ts:555

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

Defined in node_modules/@types/node/globals.d.ts:556

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

Defined in node_modules/@types/node/globals.d.ts:567

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

Defined in node_modules/@types/node/globals.d.ts:568

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

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[removeAllListeners](_miqro_.miqro.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[removeListener](_miqro_.miqro.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:557

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

*Defined in [src/miqroscript.ts:13](https://github.com/claukers/miqro-runner/blob/c5aed02/src/miqroscript.ts#L13)*

**Returns:** *string*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Miqro](_miqro_.miqro.md).[setMaxListeners](_miqro_.miqro.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Protected` simpleStart

▸ **simpleStart**(): *Promise‹void›*

*Overrides [Miqro](_miqro_.miqro.md).[simpleStart](_miqro_.miqro.md#protected-simplestart)*

*Defined in [src/miqroscript.ts:9](https://github.com/claukers/miqro-runner/blob/c5aed02/src/miqroscript.ts#L9)*

**Returns:** *Promise‹void›*

___

### `Protected` simpleStop

▸ **simpleStop**(): *Promise‹void›*

*Overrides [Miqro](_miqro_.miqro.md).[simpleStop](_miqro_.miqro.md#protected-simplestop)*

*Defined in [src/miqroscript.ts:5](https://github.com/claukers/miqro-runner/blob/c5aed02/src/miqroscript.ts#L5)*

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [Miqro](_miqro_.miqro.md).[start](_miqro_.miqro.md#start)*

*Defined in [src/miqro.ts:32](https://github.com/claukers/miqro-runner/blob/c5aed02/src/miqro.ts#L32)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [Miqro](_miqro_.miqro.md).[stop](_miqro_.miqro.md#stop)*

*Defined in [src/miqro.ts:47](https://github.com/claukers/miqro-runner/blob/c5aed02/src/miqro.ts#L47)*

**Returns:** *Promise‹void›*
