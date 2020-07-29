[@miqro/runner](../README.md) › [Globals](../globals.md) › ["loader"](_loader_.md)

# Module: "loader"

## Index

### Interfaces

* [RunInstanceReturn](../interfaces/_loader_.runinstancereturn.md)

### Functions

* [runInstance](_loader_.md#const-runinstance)
* [setupInstance](_loader_.md#const-setupinstance)

## Functions

### `Const` runInstance

▸ **runInstance**(`logger`: Logger, `scriptPath`: string): *Promise‹[RunInstanceReturn](../interfaces/_loader_.runinstancereturn.md)›*

*Defined in [src/loader.ts:35](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/loader.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`logger` | Logger |
`scriptPath` | string |

**Returns:** *Promise‹[RunInstanceReturn](../interfaces/_loader_.runinstancereturn.md)›*

___

### `Const` setupInstance

▸ **setupInstance**(`serviceName`: string): *object*

*Defined in [src/loader.ts:12](https://github.com/claukers/miqro-runner/blob/a5c7dd4/src/loader.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceName` | string |

**Returns:** *object*

* **logger**: *Logger*
