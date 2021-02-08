# FlowsApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearAllFlowsDelete**](FlowsApi.md#clearAllFlowsDelete) | **DELETE** /flows | Terminate all running Flows
[**createFlowsPost**](FlowsApi.md#createFlowsPost) | **POST** /flows | Create a Flow from a YAML config
[**deleteFlowsIdDelete**](FlowsApi.md#deleteFlowsIdDelete) | **DELETE** /flows/{id} | Terminate a running Flow
[**fetchFlowParamsFlowsArgumentsGet**](FlowsApi.md#fetchFlowParamsFlowsArgumentsGet) | **GET** /flows/arguments | Get all accept arguments of a Flow
[**getItemsFlowsGet**](FlowsApi.md#getItemsFlowsGet) | **GET** /flows | Get all alive Flows&#39; status
[**statusFlowsIdGet**](FlowsApi.md#statusFlowsIdGet) | **GET** /flows/{id} | Get the status of a running Flow



## clearAllFlowsDelete

Terminate all running Flows

### Example

```bash
 clearAllFlowsDelete
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AnyType**](AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## createFlowsPost

Create a Flow from a YAML config

### Example

```bash
 createFlowsPost
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flow** | **binary** |  | [default to null]
 **workspaceId** | [**string**](string.md) |  | [optional] [default to null]

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteFlowsIdDelete

Terminate a running Flow

Terminate a running Flow and release its resources

### Example

```bash
 deleteFlowsIdDelete id=value  workspace=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**](.md) |  | [default to null]
 **workspace** | **boolean** |  | [optional] [default to false]

### Return type

[**AnyType**](AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## fetchFlowParamsFlowsArgumentsGet

Get all accept arguments of a Flow

### Example

```bash
 fetchFlowParamsFlowsArgumentsGet
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AnyType**](AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getItemsFlowsGet

Get all alive Flows' status

### Example

```bash
 getItemsFlowsGet
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FlowStoreStatus**](FlowStoreStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## statusFlowsIdGet

Get the status of a running Flow

### Example

```bash
 statusFlowsIdGet id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**](.md) |  | [default to null]

### Return type

[**FlowItemStatus**](FlowItemStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

