# WorkspacesApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearAllWorkspacesDelete**](WorkspacesApi.md#clearAllWorkspacesDelete) | **DELETE** /workspaces | Deleting all Workspaces
[**createWorkspacesPost**](WorkspacesApi.md#createWorkspacesPost) | **POST** /workspaces | Upload files to a workspace
[**deleteWorkspacesIdDelete**](WorkspacesApi.md#deleteWorkspacesIdDelete) | **DELETE** /workspaces/{id} | Deleting an existing Workspace
[**getItemsWorkspacesGet**](WorkspacesApi.md#getItemsWorkspacesGet) | **GET** /workspaces | Get all existing Workspaces&#39; status
[**listWorkspacesIdGet**](WorkspacesApi.md#listWorkspacesIdGet) | **GET** /workspaces/{id} | Get the status of an existing Workspace



## clearAllWorkspacesDelete

Deleting all Workspaces

### Example

```bash
 clearAllWorkspacesDelete
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


## createWorkspacesPost

Upload files to a workspace

Return a UUID to the workspace, which can be used later when create Pea/Pod/Flow

### Example

```bash
 createWorkspacesPost
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **array[binary]** |  | [default to null]
 **workspaceId** | [**string**](string.md) |  | [optional] [default to null]

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deleteWorkspacesIdDelete

Deleting an existing Workspace

### Example

```bash
 deleteWorkspacesIdDelete id=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**](.md) |  | [default to null]

### Return type

[**AnyType**](AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## getItemsWorkspacesGet

Get all existing Workspaces' status

### Example

```bash
 getItemsWorkspacesGet
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


## listWorkspacesIdGet

Get the status of an existing Workspace

### Example

```bash
 listWorkspacesIdGet id=value
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

