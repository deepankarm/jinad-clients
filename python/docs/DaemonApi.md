# openapi_client.DaemonApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**home_get**](DaemonApi.md#home_get) | **GET** / |  Home
[**status_status_get**](DaemonApi.md#status_status_get) | **GET** /status | Get the status of the daemon


# **home_get**
> bool, date, datetime, dict, float, int, list, str, none_type home_get()

 Home

The instruction HTML when user visits `/` directly

### Example

```python
import time
import openapi_client
from openapi_client.api import daemon_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = daemon_api.DaemonApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        #  Home
        api_response = api_instance.home_get()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling DaemonApi->home_get: %s\n" % e)
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

# **status_status_get**
> DaemonStatus status_status_get()

Get the status of the daemon

### Example

```python
import time
import openapi_client
from openapi_client.api import daemon_api
from openapi_client.model.daemon_status import DaemonStatus
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = daemon_api.DaemonApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get the status of the daemon
        api_response = api_instance.status_status_get()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling DaemonApi->status_status_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DaemonStatus**](DaemonStatus.md)

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

