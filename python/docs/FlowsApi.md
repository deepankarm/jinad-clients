# openapi_client.FlowsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_all_flows_delete**](FlowsApi.md#clear_all_flows_delete) | **DELETE** /flows | Terminate all running Flows
[**create_flows_post**](FlowsApi.md#create_flows_post) | **POST** /flows | Create a Flow from a YAML config
[**delete_flows_id_delete**](FlowsApi.md#delete_flows_id_delete) | **DELETE** /flows/{id} | Terminate a running Flow
[**fetch_flow_params_flows_arguments_get**](FlowsApi.md#fetch_flow_params_flows_arguments_get) | **GET** /flows/arguments | Get all accept arguments of a Flow
[**get_items_flows_get**](FlowsApi.md#get_items_flows_get) | **GET** /flows | Get all alive Flows&#39; status
[**status_flows_id_get**](FlowsApi.md#status_flows_id_get) | **GET** /flows/{id} | Get the status of a running Flow


# **clear_all_flows_delete**
> bool, date, datetime, dict, float, int, list, str, none_type clear_all_flows_delete()

Terminate all running Flows

### Example

```python
import time
import openapi_client
from openapi_client.api import flows_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = flows_api.FlowsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Terminate all running Flows
        api_response = api_instance.clear_all_flows_delete()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling FlowsApi->clear_all_flows_delete: %s\n" % e)
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

# **create_flows_post**
> str create_flows_post(flow)

Create a Flow from a YAML config

### Example

```python
import time
import openapi_client
from openapi_client.api import flows_api
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
    api_instance = flows_api.FlowsApi(api_client)
    flow = open('/path/to/file', 'rb') # file_type | 
    workspace_id = "workspace_id_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create a Flow from a YAML config
        api_response = api_instance.create_flows_post(flow)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling FlowsApi->create_flows_post: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create a Flow from a YAML config
        api_response = api_instance.create_flows_post(flow, workspace_id=workspace_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling FlowsApi->create_flows_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flow** | **file_type**|  |
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

# **delete_flows_id_delete**
> bool, date, datetime, dict, float, int, list, str, none_type delete_flows_id_delete(id)

Terminate a running Flow

Terminate a running Flow and release its resources

### Example

```python
import time
import openapi_client
from openapi_client.api import flows_api
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
    api_instance = flows_api.FlowsApi(api_client)
    id = "id_example" # str | 
    workspace = False # bool |  (optional) if omitted the server will use the default value of False

    # example passing only required values which don't have defaults set
    try:
        # Terminate a running Flow
        api_response = api_instance.delete_flows_id_delete(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling FlowsApi->delete_flows_id_delete: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Terminate a running Flow
        api_response = api_instance.delete_flows_id_delete(id, workspace=workspace)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling FlowsApi->delete_flows_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  |
 **workspace** | **bool**|  | [optional] if omitted the server will use the default value of False

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

# **fetch_flow_params_flows_arguments_get**
> bool, date, datetime, dict, float, int, list, str, none_type fetch_flow_params_flows_arguments_get()

Get all accept arguments of a Flow

### Example

```python
import time
import openapi_client
from openapi_client.api import flows_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = flows_api.FlowsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get all accept arguments of a Flow
        api_response = api_instance.fetch_flow_params_flows_arguments_get()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling FlowsApi->fetch_flow_params_flows_arguments_get: %s\n" % e)
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

# **get_items_flows_get**
> FlowStoreStatus get_items_flows_get()

Get all alive Flows' status

### Example

```python
import time
import openapi_client
from openapi_client.api import flows_api
from openapi_client.model.flow_store_status import FlowStoreStatus
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = flows_api.FlowsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get all alive Flows' status
        api_response = api_instance.get_items_flows_get()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling FlowsApi->get_items_flows_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FlowStoreStatus**](FlowStoreStatus.md)

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

# **status_flows_id_get**
> FlowItemStatus status_flows_id_get(id)

Get the status of a running Flow

### Example

```python
import time
import openapi_client
from openapi_client.api import flows_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.flow_item_status import FlowItemStatus
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = flows_api.FlowsApi(api_client)
    id = "id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get the status of a running Flow
        api_response = api_instance.status_flows_id_get(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling FlowsApi->status_flows_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  |

### Return type

[**FlowItemStatus**](FlowItemStatus.md)

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

