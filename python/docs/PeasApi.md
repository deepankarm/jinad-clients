# openapi_client.PeasApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_all_peas_delete**](PeasApi.md#clear_all_peas_delete) | **DELETE** /peas | Terminate all running Peas
[**create_peas_post**](PeasApi.md#create_peas_post) | **POST** /peas | Create a Pea
[**delete_peas_id_delete**](PeasApi.md#delete_peas_id_delete) | **DELETE** /peas/{id} | Terminate a running Pea
[**fetch_pea_params_peas_arguments_get**](PeasApi.md#fetch_pea_params_peas_arguments_get) | **GET** /peas/arguments | Get all accept arguments of a Pea
[**get_items_peas_get**](PeasApi.md#get_items_peas_get) | **GET** /peas | Get all alive Pea&#39; status
[**status_peas_id_get**](PeasApi.md#status_peas_id_get) | **GET** /peas/{id} | Get status of a running Pea


# **clear_all_peas_delete**
> bool, date, datetime, dict, float, int, list, str, none_type clear_all_peas_delete()

Terminate all running Peas

### Example

```python
import time
import openapi_client
from openapi_client.api import peas_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = peas_api.PeasApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Terminate all running Peas
        api_response = api_instance.clear_all_peas_delete()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PeasApi->clear_all_peas_delete: %s\n" % e)
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

# **create_peas_post**
> str create_peas_post(pea_model)

Create a Pea

Create a Pea and add it to the store

### Example

```python
import time
import openapi_client
from openapi_client.api import peas_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.pea_model import PeaModel
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = peas_api.PeasApi(api_client)
    pea_model = PeaModel(
        name="name_example",
        log_config="/home/deepankar/coding/repos/jina/jina/resources/logging.default.yml",
        hide_exc_info=False,
        port_ctrl=50199,
        ctrl_with_ipc=False,
        timeout_ctrl=5000,
        ssh_server="ssh_server_example",
        ssh_keyfile="ssh_keyfile_example",
        ssh_password="ssh_password_example",
        uses="_pass",
        py_modules=[
            "py_modules_example",
        ],
        port_in=43103,
        port_out=53195,
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
        port_expose=50201,
        silent_remote_logs=False,
        upload_files=[
            "upload_files_example",
        ],
        workspace_id="2e409b2d-6dcb-44f3-9a11-e3fe79d82682",
        daemon=False,
        runtime_backend="PROCESS",
        runtime_cls="ZEDRuntime",
        timeout_ready=60000,
        expose_public=False,
        pea_id=0,
        pea_role="SINGLETON",
    ) # PeaModel | 

    # example passing only required values which don't have defaults set
    try:
        # Create a Pea
        api_response = api_instance.create_peas_post(pea_model)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PeasApi->create_peas_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pea_model** | [**PeaModel**](PeaModel.md)|  |

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

# **delete_peas_id_delete**
> bool, date, datetime, dict, float, int, list, str, none_type delete_peas_id_delete(id)

Terminate a running Pea

Terminate a running Pea and release its resources

### Example

```python
import time
import openapi_client
from openapi_client.api import peas_api
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
    api_instance = peas_api.PeasApi(api_client)
    id = "id_example" # str | 
    workspace = False # bool |  (optional) if omitted the server will use the default value of False

    # example passing only required values which don't have defaults set
    try:
        # Terminate a running Pea
        api_response = api_instance.delete_peas_id_delete(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PeasApi->delete_peas_id_delete: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Terminate a running Pea
        api_response = api_instance.delete_peas_id_delete(id, workspace=workspace)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PeasApi->delete_peas_id_delete: %s\n" % e)
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

# **fetch_pea_params_peas_arguments_get**
> bool, date, datetime, dict, float, int, list, str, none_type fetch_pea_params_peas_arguments_get()

Get all accept arguments of a Pea

### Example

```python
import time
import openapi_client
from openapi_client.api import peas_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = peas_api.PeasApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get all accept arguments of a Pea
        api_response = api_instance.fetch_pea_params_peas_arguments_get()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PeasApi->fetch_pea_params_peas_arguments_get: %s\n" % e)
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

# **get_items_peas_get**
> StoreStatus get_items_peas_get()

Get all alive Pea' status

### Example

```python
import time
import openapi_client
from openapi_client.api import peas_api
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
    api_instance = peas_api.PeasApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get all alive Pea' status
        api_response = api_instance.get_items_peas_get()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PeasApi->get_items_peas_get: %s\n" % e)
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

# **status_peas_id_get**
> StoreItemStatus status_peas_id_get(id)

Get status of a running Pea

### Example

```python
import time
import openapi_client
from openapi_client.api import peas_api
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
    api_instance = peas_api.PeasApi(api_client)
    id = "id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get status of a running Pea
        api_response = api_instance.status_peas_id_get(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PeasApi->status_peas_id_get: %s\n" % e)
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

