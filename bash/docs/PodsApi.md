# PodsApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearAllPodsDelete**](PodsApi.md#clearAllPodsDelete) | **DELETE** /pods | Terminate all running Pods
[**createPodsPost**](PodsApi.md#createPodsPost) | **POST** /pods | Create a Pod
[**deletePodsIdDelete**](PodsApi.md#deletePodsIdDelete) | **DELETE** /pods/{id} | Terminate a running Pod
[**fetchPodParamsPodsArgumentsGet**](PodsApi.md#fetchPodParamsPodsArgumentsGet) | **GET** /pods/arguments | Get all accept arguments of a Pod
[**getItemsPodsGet**](PodsApi.md#getItemsPodsGet) | **GET** /pods | Get all alive Pods&#39; status
[**statusPodsIdGet**](PodsApi.md#statusPodsIdGet) | **GET** /pods/{id} | Get status of a running Pod



## clearAllPodsDelete

Terminate all running Pods

### Example

```bash
 clearAllPodsDelete
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


## createPodsPost

Create a Pod

Create a Pod and add it to the store

### Example

```bash
 createPodsPost
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **podModel** | [**PodModel**](PodModel.md) |  |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deletePodsIdDelete

Terminate a running Pod

Terminate a running Pod and release its resources

### Example

```bash
 deletePodsIdDelete id=value  workspace=value
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


## fetchPodParamsPodsArgumentsGet

Get all accept arguments of a Pod

### Example

```bash
 fetchPodParamsPodsArgumentsGet
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


## getItemsPodsGet

Get all alive Pods' status

### Example

```bash
 getItemsPodsGet
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


## statusPodsIdGet

Get status of a running Pod

### Example

```bash
 statusPodsIdGet id=value
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

