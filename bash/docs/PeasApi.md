# PeasApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearAllPeasDelete**](PeasApi.md#clearAllPeasDelete) | **DELETE** /peas | Terminate all running Peas
[**createPeasPost**](PeasApi.md#createPeasPost) | **POST** /peas | Create a Pea
[**deletePeasIdDelete**](PeasApi.md#deletePeasIdDelete) | **DELETE** /peas/{id} | Terminate a running Pea
[**fetchPeaParamsPeasArgumentsGet**](PeasApi.md#fetchPeaParamsPeasArgumentsGet) | **GET** /peas/arguments | Get all accept arguments of a Pea
[**getItemsPeasGet**](PeasApi.md#getItemsPeasGet) | **GET** /peas | Get all alive Pea&#39; status
[**statusPeasIdGet**](PeasApi.md#statusPeasIdGet) | **GET** /peas/{id} | Get status of a running Pea



## clearAllPeasDelete

Terminate all running Peas

### Example

```bash
 clearAllPeasDelete
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


## createPeasPost

Create a Pea

Create a Pea and add it to the store

### Example

```bash
 createPeasPost
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **peaModel** | [**PeaModel**](PeaModel.md) |  |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deletePeasIdDelete

Terminate a running Pea

Terminate a running Pea and release its resources

### Example

```bash
 deletePeasIdDelete id=value  workspace=value
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


## fetchPeaParamsPeasArgumentsGet

Get all accept arguments of a Pea

### Example

```bash
 fetchPeaParamsPeasArgumentsGet
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


## getItemsPeasGet

Get all alive Pea' status

### Example

```bash
 getItemsPeasGet
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StoreStatus**](StoreStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## statusPeasIdGet

Get status of a running Pea

### Example

```bash
 statusPeasIdGet id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**](.md) |  | [default to null]

### Return type

[**StoreItemStatus**](StoreItemStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

