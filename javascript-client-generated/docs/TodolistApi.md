# TodolistRestfulApi.TodolistApi

All URIs are relative to *https://api.{envronment}.server.test/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**todolistGet**](TodolistApi.md#todolistGet) | **GET** /todolist | Get all todolist
[**todolistPost**](TodolistApi.md#todolistPost) | **POST** /todolist | Create new todolist
[**todolistTodolistIdDelete**](TodolistApi.md#todolistTodolistIdDelete) | **DELETE** /todolist/{todolistId} | Delete existing todolist
[**todolistTodolistIdPut**](TodolistApi.md#todolistTodolistIdPut) | **PUT** /todolist/{todolistId} | Update existing todolist

<a name="todolistGet"></a>
# **todolistGet**
> ArrayTodolist todolistGet(opts)

Get all todolist

Get all active todolist by default

### Example
```javascript
import {TodolistRestfulApi} from 'todolist_restful_api';
let defaultClient = TodolistRestfulApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new TodolistRestfulApi.TodolistApi();
let opts = { 
  'includeDone': false, // Boolean | Is included done todolist
  'name': "name_example" // String | Filter todolist by name
};
apiInstance.todolistGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeDone** | **Boolean**| Is included done todolist | [optional] [default to false]
 **name** | **String**| Filter todolist by name | [optional] 

### Return type

[**ArrayTodolist**](ArrayTodolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todolistPost"></a>
# **todolistPost**
> Todolist todolistPost(body)

Create new todolist

Create new todolist to database

### Example
```javascript
import {TodolistRestfulApi} from 'todolist_restful_api';
let defaultClient = TodolistRestfulApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new TodolistRestfulApi.TodolistApi();
let body = new TodolistRestfulApi.CreateOrUpdateTodolist(); // CreateOrUpdateTodolist | 

apiInstance.todolistPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrUpdateTodolist**](CreateOrUpdateTodolist.md)|  | 

### Return type

[**Todolist**](Todolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="todolistTodolistIdDelete"></a>
# **todolistTodolistIdDelete**
> InlineResponse200 todolistTodolistIdDelete(todolistId)

Delete existing todolist

Delete existing todolist in database

### Example
```javascript
import {TodolistRestfulApi} from 'todolist_restful_api';
let defaultClient = TodolistRestfulApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new TodolistRestfulApi.TodolistApi();
let todolistId = "todolistId_example"; // String | Todolist id for updated

apiInstance.todolistTodolistIdDelete(todolistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todolistId** | **String**| Todolist id for updated | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todolistTodolistIdPut"></a>
# **todolistTodolistIdPut**
> Todolist todolistTodolistIdPut(body, todolistId)

Update existing todolist

Update existing todolist to database

### Example
```javascript
import {TodolistRestfulApi} from 'todolist_restful_api';
let defaultClient = TodolistRestfulApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new TodolistRestfulApi.TodolistApi();
let body = new TodolistRestfulApi.CreateOrUpdateTodolist(); // CreateOrUpdateTodolist | 
let todolistId = "todolistId_example"; // String | Todolist id for updated

apiInstance.todolistTodolistIdPut(body, todolistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrUpdateTodolist**](CreateOrUpdateTodolist.md)|  | 
 **todolistId** | **String**| Todolist id for updated | 

### Return type

[**Todolist**](Todolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

