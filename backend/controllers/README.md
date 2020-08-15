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

<b>{GET} /api/clients/:clientId</b>
Example of a returned response when getting a client

```json
{
  "client": {
    "id": "01c79821-a62b-4284-917c-32896fd71dec",
    "group_id": "123e4567-e89b-12d3-a456-426614175000",
    "user_id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "client2",
    "creationDate": "2020-08-15T16:20:52.226Z",
    "createdBy": "123e4567-e89b-12d3-a456-426614174000",
    "lastModified": "2020-08-15T16:20:52.226Z",
    "lastModifiedBy": "123e4567-e89b-12d3-a456-426614174000",
    "lastDeployed": null,
    "advancedSettingClients": [
      {
        "id": "78c0b924-cb1f-4c8e-abdb-fd17803a7316",
        "client_id": "01c79821-a62b-4284-917c-32896fd71dec",
        "key": "key1",
        "value": "value1"
      }
    ],
    "attributeMappings": [
      {
        "id": "20ea5a74-656f-4d49-ad82-19acfa221b72",
        "client_id": "01c79821-a62b-4284-917c-32896fd71dec",
        "key": "attribute1",
        "value": "mapping1"
      },
      {
        "id": "6908ebd5-f7df-4b89-89b4-6b0c17fee2f3",
        "client_id": "01c79821-a62b-4284-917c-32896fd71dec",
        "key": "attribute2",
        "value": "mapping2"
      }
    ],
    "metadata": [],
    "clientStatuses": [
      {
        "id": "76c4099e-e531-40b5-ac55-bf311a41aae2",
        "client_id": "01c79821-a62b-4284-917c-32896fd71dec",
        "status_id": "a64eb51a-eb67-4488-8191-b3e0274d7847",
        "creationDate": "2020-08-15T16:20:52.226Z"
      },
      {
        "id": "2e1e1903-fb40-4476-88c4-f424dbb419c1",
        "client_id": "01c79821-a62b-4284-917c-32896fd71dec",
        "status_id": "29a6b6f2-903e-4feb-838f-eaed4ff3af00",
        "creationDate": "2020-08-15T16:38:01.827Z"
      },
      {
        "id": "4ad0960c-10e0-4940-a8dc-7b069ea9e9b2",
        "client_id": "01c79821-a62b-4284-917c-32896fd71dec",
        "status_id": "29a6b6f2-903e-4feb-838f-eaed4ff3af00",
        "creationDate": "2020-08-15T16:41:18.903Z"
      }
    ]
  },
  "latestStatus": {
    "id": "29a6b6f2-903e-4feb-838f-eaed4ff3af00",
    "type": "REQUEST APPROVAL"
  }
}
```
