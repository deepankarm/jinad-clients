# openapi_client.PodsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_all_pods_delete**](PodsApi.md#clear_all_pods_delete) | **DELETE** /pods | Terminate all running Pods
[**create_pods_post**](PodsApi.md#create_pods_post) | **POST** /pods | Create a Pod
[**delete_pods_id_delete**](PodsApi.md#delete_pods_id_delete) | **DELETE** /pods/{id} | Terminate a running Pod
[**fetch_pod_params_pods_arguments_get**](PodsApi.md#fetch_pod_params_pods_arguments_get) | **GET** /pods/arguments | Get all accept arguments of a Pod
[**get_items_pods_get**](PodsApi.md#get_items_pods_get) | **GET** /pods | Get all alive Pods&#39; status
[**status_pods_id_get**](PodsApi.md#status_pods_id_get) | **GET** /pods/{id} | Get status of a running Pod


# **clear_all_pods_delete**
> bool, date, datetime, dict, float, int, list, str, none_type clear_all_pods_delete()

Terminate all running Pods

### Example

```python
import time
import openapi_client
from openapi_client.api import pods_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = pods_api.PodsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Terminate all running Pods
        api_response = api_instance.clear_all_pods_delete()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodsApi->clear_all_pods_delete: %s\n" % e)
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

# **create_pods_post**
> str create_pods_post(pod_model)

Create a Pod

Create a Pod and add it to the store

### Example

```python
import time
import openapi_client
from openapi_client.api import pods_api
from openapi_client.model.pod_model import PodModel
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
    api_instance = pods_api.PodsApi(api_client)
    pod_model = PodModel(
        name="name_example",
        log_config="/home/deepankar/coding/repos/jina/jina/resources/logging.default.yml",
        hide_exc_info=False,
        port_ctrl=52825,
        ctrl_with_ipc=False,
        timeout_ctrl=5000,
        ssh_server="ssh_server_example",
        ssh_keyfile="ssh_keyfile_example",
        ssh_password="ssh_password_example",
        uses="_pass",
        py_modules=[
            "py_modules_example",
        ],
        port_in=48685,
        port_out=38155,
        host_in="0.0.0.0",
        host_out="0.0.0.0",
        socket_in="PULL_BIND",
        socket_out="PUSH_BIND",
        dump_interval=240,
        read_only=False,
        memory_hwm=-1,
        on_error_strategy="IGNORE",
        num_part=0,
        uses_internal="BaseExecutor",
        entrypoint="entrypoint_example",
        pull_latest=False,
        volumes=[
            "volumes_example",
        ],
        host="0.0.0.0",
        port_expose=49737,
        silent_remote_logs=False,
        upload_files=[
            "upload_files_example",
        ],
        workspace_id="a2355a8f-408b-46d3-bbf6-ceb0634dee95",
        daemon=False,
        runtime_backend="PROCESS",
        runtime_cls="ZEDRuntime",
        timeout_ready=60000,
        expose_public=False,
        pea_id=0,
        pea_role="SINGLETON",
        uses_before="uses_before_example",
        uses_after="uses_after_example",
        parallel=1,
        polling="ANY",
        scheduling="LOAD_BALANCE",
        pod_role="pod_role_example",
    ) # PodModel | 

    # example passing only required values which don't have defaults set
    try:
        # Create a Pod
        api_response = api_instance.create_pods_post(pod_model)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodsApi->create_pods_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pod_model** | [**PodModel**](PodModel.md)|  |

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_pods_id_delete**
> bool, date, datetime, dict, float, int, list, str, none_type delete_pods_id_delete(id)

Terminate a running Pod

Terminate a running Pod and release its resources

### Example

```python
import time
import openapi_client
from openapi_client.api import pods_api
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
    api_instance = pods_api.PodsApi(api_client)
    id = "id_example" # str | 
    workspace = False # bool |  (optional) if omitted the server will use the default value of False

    # example passing only required values which don't have defaults set
    try:
        # Terminate a running Pod
        api_response = api_instance.delete_pods_id_delete(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodsApi->delete_pods_id_delete: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Terminate a running Pod
        api_response = api_instance.delete_pods_id_delete(id, workspace=workspace)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodsApi->delete_pods_id_delete: %s\n" % e)
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

# **fetch_pod_params_pods_arguments_get**
> bool, date, datetime, dict, float, int, list, str, none_type fetch_pod_params_pods_arguments_get()

Get all accept arguments of a Pod

### Example

```python
import time
import openapi_client
from openapi_client.api import pods_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = pods_api.PodsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get all accept arguments of a Pod
        api_response = api_instance.fetch_pod_params_pods_arguments_get()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodsApi->fetch_pod_params_pods_arguments_get: %s\n" % e)
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

# **get_items_pods_get**
> StoreStatus get_items_pods_get()

Get all alive Pods' status

### Example

```python
import time
import openapi_client
from openapi_client.api import pods_api
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
    api_instance = pods_api.PodsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get all alive Pods' status
        api_response = api_instance.get_items_pods_get()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodsApi->get_items_pods_get: %s\n" % e)
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

# **status_pods_id_get**
> StoreItemStatus status_pods_id_get(id)

Get status of a running Pod

### Example

```python
import time
import openapi_client
from openapi_client.api import pods_api
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
    api_instance = pods_api.PodsApi(api_client)
    id = "id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get status of a running Pod
        api_response = api_instance.status_pods_id_get(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PodsApi->status_pods_id_get: %s\n" % e)
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

