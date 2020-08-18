# Example usage for routes

### Clients

<b>{POST} /api/clients</b>
Example of an accepted request body

```json
{
  "name": "client2",
  "group_id": "123e4567-e89b-12d3-a456-426614175000",
  "user_id": "123e4567-e89b-12d3-a456-426614174000",
  "advancedSettingClients": [{ "key": "key1", "value": "value1" }],
  "attributeMappings": [
    { "key": "attribute1", "value": "mapping1" },
    { "key": "attribute2", "value": "mapping2" }
  ]
}
```

<b>{POST} /api/clients/:clientId/status</b>
Example of an accepted request body

```json
{
  "user_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "WAIT FOR DEPLOYMENT"
}
```

<b>{GET} /api/clients/:clientId</b>
Example of a returned response when getting a client

```json
{
  "client": {
    "id": "539a0d75-088a-414c-b7c9-49c1e351efc4",
    "group_id": "123e4567-e89b-12d3-a456-426614175000",
    "user_id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "",
    "creationDate": "2020-08-16T10:24:42.278Z",
    "createdBy": "123e4567-e89b-12d3-a456-426614174000",
    "lastModified": "2020-08-16T10:24:42.278Z",
    "lastModifiedBy": "123e4567-e89b-12d3-a456-426614174000",
    "lastDeployed": null,
    "advancedSettingClients": [
      {
        "id": "ea62680b-241a-4522-9a6a-9fd82583c37d",
        "client_id": "539a0d75-088a-414c-b7c9-49c1e351efc4",
        "key": "key1",
        "value": "value1"
      }
    ],
    "attributeMappings": [
      {
        "id": "8974efbd-c7d2-4171-901c-ff9145eeaaa1",
        "client_id": "539a0d75-088a-414c-b7c9-49c1e351efc4",
        "key": "attribute1",
        "value": "mapping1"
      },
      {
        "id": "8044edd3-72d8-4aaf-a2c0-48b10bf75805",
        "client_id": "539a0d75-088a-414c-b7c9-49c1e351efc4",
        "key": "attribute2",
        "value": "mapping2"
      }
    ],
    "metadata": [],
    "latestStatus": {
      "id": "4da994da-0fd5-443d-ad1f-9f01b97eb918",
      "type": "WAIT FOR DEPLOYMENT"
    }
  }
}
```
