# openapi_client.WorkspacesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_all_workspaces_delete**](WorkspacesApi.md#clear_all_workspaces_delete) | **DELETE** /workspaces | Deleting all Workspaces
[**create_workspaces_post**](WorkspacesApi.md#create_workspaces_post) | **POST** /workspaces | Upload files to a workspace
[**delete_workspaces_id_delete**](WorkspacesApi.md#delete_workspaces_id_delete) | **DELETE** /workspaces/{id} | Deleting an existing Workspace
[**get_items_workspaces_get**](WorkspacesApi.md#get_items_workspaces_get) | **GET** /workspaces | Get all existing Workspaces&#39; status
[**list_workspaces_id_get**](WorkspacesApi.md#list_workspaces_id_get) | **GET** /workspaces/{id} | Get the status of an existing Workspace


# **clear_all_workspaces_delete**
> bool, date, datetime, dict, float, int, list, str, none_type clear_all_workspaces_delete()

Deleting all Workspaces

### Example

```python
import time
import openapi_client
from openapi_client.api import workspaces_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = workspaces_api.WorkspacesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Deleting all Workspaces
        api_response = api_instance.clear_all_workspaces_delete()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling WorkspacesApi->clear_all_workspaces_delete: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_workspaces_post**
> str create_workspaces_post(files)

Upload files to a workspace

Return a UUID to the workspace, which can be used later when create Pea/Pod/Flow

### Example

```python
import time
import openapi_client
from openapi_client.api import workspaces_api
from openapi_client.model.http_validation_error import HTTPValidationError
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = workspaces_api.WorkspacesApi(api_client)
    files = open('/path/to/file', 'rb') # [file_type] | 
    workspace_id = "workspace_id_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Upload files to a workspace
        api_response = api_instance.create_workspaces_post(files)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling WorkspacesApi->create_workspaces_post: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Upload files to a workspace
        api_response = api_instance.create_workspaces_post(files, workspace_id=workspace_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling WorkspacesApi->create_workspaces_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **[file_type]**|  |
 **workspace_id** | **str**|  | [optional]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_workspaces_id_delete**
> bool, date, datetime, dict, float, int, list, str, none_type delete_workspaces_id_delete(id)

Deleting an existing Workspace

### Example

```python
import time
import openapi_client
from openapi_client.api import workspaces_api
from openapi_client.model.http_validation_error import HTTPValidationError
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = workspaces_api.WorkspacesApi(api_client)
    id = "id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Deleting an existing Workspace
        api_response = api_instance.delete_workspaces_id_delete(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling WorkspacesApi->delete_workspaces_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  |

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_items_workspaces_get**
> StoreStatus get_items_workspaces_get()

Get all existing Workspaces' status

### Example

```python
import time
import openapi_client
from openapi_client.api import workspaces_api
from openapi_client.model.store_status import StoreStatus
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = workspaces_api.WorkspacesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get all existing Workspaces' status
        api_response = api_instance.get_items_workspaces_get()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling WorkspacesApi->get_items_workspaces_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**StoreStatus**](StoreStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_workspaces_id_get**
> StoreItemStatus list_workspaces_id_get(id)

Get the status of an existing Workspace

### Example

```python
import time
import openapi_client
from openapi_client.api import workspaces_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.store_item_status import StoreItemStatus
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = workspaces_api.WorkspacesApi(api_client)
    id = "id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get the status of an existing Workspace
        api_response = api_instance.list_workspaces_id_get(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling WorkspacesApi->list_workspaces_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  |

### Return type

[**StoreItemStatus**](StoreItemStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

