---
sidebar: auto
---

# OGAPI: An API for the API

## What is OGAPI?

OGAPI is a javascript solution, born to help the integration with [OpenGate API REST](https://www.amplia-iiot.com/documentation/latest/).

It makes a way easier and cleaner the integration with the different services provide by Opengate. It is developed under NodeJS, however you could use it into the browser because it is an isomorphic javascript API.

### OpenSource Project

Besides, _OGAPI_ is OpenSource. You can find it on [github](https://github.com), it is called _opengate-js_.

> [opengate-js](https://github.com/amplia-iiot/opengate-js)

### Getting Started

In order to be able to use it on your project, you should add it as a dependency on _package.json_ file, or, install it straightaway with npm

```shell
$ yarn add amplia-iiot/opengate-js
```
or

```shell
$ npm install amplia-iiot/opengate-js
```

## Hello OGAPI!!!

### Adding the OGAPI dependency

Remember, you should make the correct import, by correct import we mean that you should reference in the import statement the installed version. This is necessary just on browser.

**NODEJS**:
```javascript
const ogapi = require('opengate-js')
```

**HTML**:
```javascript
import {} from 'opengate-js/dist/opengate-api-bower-7.2.0'
```
or 

```javascript
<script src="opengate-js/dist/opengate-api-bower-7.2.0"></script>
```
**HTML**: [HTML Import](https://www.w3schools.com/tags/att_script_src.asp)

::: tip
This isn't necessary to develop WiWis, everything is set under the [$api](/wiwis/development.html#api) object
:::

### Creating an instance

Before using it, you should create an instance, we show you down below how to do so:

```javascript
var $api = new OpenGateAPI({
    apiKey: 'OPENGATE API-KEY', 
    url: 'NORTH OPENGATE API URL (*)',
    timeout: 120000, // Request timeout
    south: {
        url: 'SOUTH OPENGATE API URL (*)'
    }
})
```

::: details Services provided by OpenGate available on this url
**North Api**: https://api.opengate.es/north/v80

**South Api**: https://api.opengate.es/south/v80
:::

### Test

Once you have created an instance, we are goint to check if all is right. To do so, you can perform your first searching. We show you how to make a easy one.
With this you will ask for all the reachables domains by the given apy-key:

```javascript
$api.domainsSearchBuilder()
    .build()
    .execute()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
```

> OGAPI has been developed following the [Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface#JavaScript) standart

## What else can you do with OGAPI ?

Opengate provides a huge amount of services such as provision, searching, operations, recollecting data, and so forth.

Right below you will find some examples with OGAPI and the REST equivalent. These examples gather the most used services.

### Searching through OGAPI

Now, you will be shown the same searching but on different Opengate endpoints.

#### Entity searching 

In order to perform an entity searching, you should do as follow:

```bash
curl --request POST \
     --data-binary @filter.json \
     --header "X-ApiKey: YOUR_API_KEY_HERE" \
     --verbose \
     http://[your_opengate_address]/north/v80/search/devices?flattened=true
```

::: details filter.json
```json 
{
  "filter": {
    "and": [
      {
        "like": {
          "resourceType": "entity.asset"
        }
      }
    ]
  }
}
```
:::

OGAPI code

```javascript
$api.entitiesSearchBuilder()
    .flattened()
    .filter(
        {
            "like": {
                "resourceType": "entity.asset"
            }
        }
    )
    .build().execute()
```

### Provision through OGAPI


Now, you will be shown the same provision but on different Opengate endpoints.

#### Channel provision

Example of doing that through OpenGate API REST

```bash
curl --request POST \
     --data-binary @channel.json \
     --header "X-ApiKey: YOUR_API_KEY_HERE" \
     --verbose \
     http://[your_opengate_address]/north/v80/provision/organizations/{organizationName}/channels \
     -H "Content-type: application/json"
```

::: details channel.json
```json 
{
  "channel": {
    "name": "battery_channel",
    "description": "channel description",
    "certificates": [
      "certificate1_id",
      "certificate2_id"
    ]
  }
}
```
:::

OGAPI code

```javascript
$api.channelsBuilder()
    .withOrganization({organizationName})
    .withName('batteryChannel')
    .withDescription('channel description')
    .withCertificate('certificate1_id')
    .withCertificate('certificate2_id')
    .create()
```

#### Ticket provision

OpenGate allows you to shape some of its entities (devices, assets and tickets), thanks to the datamodels, so you could define it behaviour focusing in every detail. OGAPI will modify its structure according with the selected entity model, for the purpose of helping as much as possible in the provisión process.

This is a ticket provision example through OGAPI:

```javascript
// Firstly the builder is called to create a customized builder depending on the entity's datamodels
$api.entityBuilder
    .ticketsBuilder(organization)
    .then(function(builder) {
        builder.with('provision.ticket.identifier', 'nuevo identificador')
            .with('provision.ticket.name', 'Nombre del ticket')
            .with('provision.ticket.type', 'WORKORDER')
            .with('provision.ticket.severity', 'CRITICAL')
            .create();
    })

```
> All the entities builders have the same above behaviour.

### Performing Operation through OGAPI

You will find similarities between performing operations and making searching through OGAPI.
Firstly.. Can you guess ?
Yes, you have to call the builder giving the operation name to it. This is because each operation has a different set of parameters and the created builder knows all of them, so it will help you filling them.
In base of the filled parameters, OGAPI will know when an operation is periodic or not (job or task), so you don't need to care about it, OGAPI will do it for yourself.

#### Getting the operation catalog

Some of the operations aren't developed on OGAPI yet, nevertheless it let you perform them. In this case, to do so you should use _rawSearchBuilder_.
The code below shows you how to get the operation catalog:

```javascript
$api.rawSearchBuilder()
    .from('/catalog/operations')
    .build()
    .execute()
```

#### Performing operations

Once we know which operations are availables, we go ahead with building and executing our operation.

```javascript
$api.operations
    .builderByOperationName('identificador de operación')
    .then(function(operationBuilder) {
        builder.withAckTimeout(parseInt(timers.acktimeout || 0), 'seconds')
            .withJobTimeout(parseInt(timers.stop))
            .withTimeout(parseInt(timers.timeout), 'seconds')
            .withRetries(parseInt(timers.retries || 0))
            .withRetriesDelay(parseInt(timers.retriesDelay || 0), 'seconds')
            .withNotes(options.userNotes || null)
            .withCallback(options.callback || null)
            .appendEntitiesBy
                .list(['entidad1', 'entidad2'])
            .build()
            .execute()
    }));
```

::: tip OGAPI extended documentation
You will find the extended documentation in the [OGAPI github repository](https://github.com/amplia-iiot/opengate-js/tree/master/documentation)
:::