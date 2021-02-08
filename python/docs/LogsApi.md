# openapi_client.LogsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_logs_logs_workspace_id_log_id_get**](LogsApi.md#export_logs_logs_workspace_id_log_id_get) | **GET** /logs/{workspace_id}/{log_id} |  Export Logs


# **export_logs_logs_workspace_id_log_id_get**
> bool, date, datetime, dict, float, int, list, str, none_type export_logs_logs_workspace_id_log_id_get(workspace_id, log_id)

 Export Logs

### Example

```python
import time
import openapi_client
from openapi_client.api import logs_api
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
    api_instance = logs_api.LogsApi(api_client)
    workspace_id = "workspace_id_example" # str | 
    log_id = "log_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        #  Export Logs
        api_response = api_instance.export_logs_logs_workspace_id_log_id_get(workspace_id, log_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling LogsApi->export_logs_logs_workspace_id_log_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**|  |
 **log_id** | **str**|  |

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

