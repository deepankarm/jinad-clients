# JinaD (Daemon) Bash client

## Overview

This is a Bash client script for accessing JinaD (Daemon) service.

The script uses cURL underneath for making all REST calls.

## Usage

```shell
# Make sure the script has executable rights
$ chmod u+x 

# Print the list of operations available on the service
$ ./ -h

# Print the service description
$ ./ --about

# Print detailed information about specific operation
$ ./ <operationId> -h

# Make GET request
./ --host http://<hostname>:<port> --accept xml <operationId> <queryParam1>=<value1> <header_key1>:<header_value2>

# Make GET request using arbitrary curl options (must be passed before <operationId>) to an SSL service using username:password
 -k -sS --tlsv1.2 --host https://<hostname> -u <user>:<password> --accept xml <operationId> <queryParam1>=<value1> <header_key1>:<header_value2>

# Make POST request
$ echo '<body_content>' |  --host <hostname> --content-type json <operationId> -

# Make POST request with simple JSON content, e.g.:
# {
#   "key1": "value1",
#   "key2": "value2",
#   "key3": 23
# }
$ echo '<body_content>' |  --host <hostname> --content-type json <operationId> key1==value1 key2=value2 key3:=23 -

# Preview the cURL command without actually executing it
$  --host http://<hostname>:<port> --dry-run <operationid>

```

## Docker image

You can easily create a Docker image containing a preconfigured environment
for using the REST Bash client including working autocompletion and short
welcome message with basic instructions, using the generated Dockerfile:

```shell
docker build -t my-rest-client .
docker run -it my-rest-client
```

By default you will be logged into a Zsh environment which has much more
advanced auto completion, but you can switch to Bash, where basic autocompletion
is also available.

## Shell completion

### Bash

The generated bash-completion script can be either directly loaded to the current Bash session using:

```shell
source .bash-completion
```

Alternatively, the script can be copied to the `/etc/bash-completion.d` (or on OSX with Homebrew to `/usr/local/etc/bash-completion.d`):

```shell
sudo cp .bash-completion /etc/bash-completion.d/
```

#### OS X

On OSX you might need to install bash-completion using Homebrew:

```shell
brew install bash-completion
```

and add the following to the `~/.bashrc`:

```shell
if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion
fi
```

### Zsh

In Zsh, the generated `_` Zsh completion file must be copied to one of the folders under `$FPATH` variable.

## Documentation for API Endpoints

All URIs are relative to **

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DaemonApi* | [**homeGet**](docs/DaemonApi.md#homeget) | **GET** / | Home
*DaemonApi* | [**statusStatusGet**](docs/DaemonApi.md#statusstatusget) | **GET** /status | Get the status of the daemon
*FlowsApi* | [**clearAllFlowsDelete**](docs/FlowsApi.md#clearallflowsdelete) | **DELETE** /flows | Terminate all running Flows
*FlowsApi* | [**createFlowsPost**](docs/FlowsApi.md#createflowspost) | **POST** /flows | Create a Flow from a YAML config
*FlowsApi* | [**deleteFlowsIdDelete**](docs/FlowsApi.md#deleteflowsiddelete) | **DELETE** /flows/{id} | Terminate a running Flow
*FlowsApi* | [**fetchFlowParamsFlowsArgumentsGet**](docs/FlowsApi.md#fetchflowparamsflowsargumentsget) | **GET** /flows/arguments | Get all accept arguments of a Flow
*FlowsApi* | [**getItemsFlowsGet**](docs/FlowsApi.md#getitemsflowsget) | **GET** /flows | Get all alive Flows&#39; status
*FlowsApi* | [**statusFlowsIdGet**](docs/FlowsApi.md#statusflowsidget) | **GET** /flows/{id} | Get the status of a running Flow
*LogsApi* | [**exportLogsLogsWorkspaceIdLogIdGet**](docs/LogsApi.md#exportlogslogsworkspaceidlogidget) | **GET** /logs/{workspace_id}/{log_id} | Export Logs
*PeasApi* | [**clearAllPeasDelete**](docs/PeasApi.md#clearallpeasdelete) | **DELETE** /peas | Terminate all running Peas
*PeasApi* | [**createPeasPost**](docs/PeasApi.md#createpeaspost) | **POST** /peas | Create a Pea
*PeasApi* | [**deletePeasIdDelete**](docs/PeasApi.md#deletepeasiddelete) | **DELETE** /peas/{id} | Terminate a running Pea
*PeasApi* | [**fetchPeaParamsPeasArgumentsGet**](docs/PeasApi.md#fetchpeaparamspeasargumentsget) | **GET** /peas/arguments | Get all accept arguments of a Pea
*PeasApi* | [**getItemsPeasGet**](docs/PeasApi.md#getitemspeasget) | **GET** /peas | Get all alive Pea&#39; status
*PeasApi* | [**statusPeasIdGet**](docs/PeasApi.md#statuspeasidget) | **GET** /peas/{id} | Get status of a running Pea
*PodsApi* | [**clearAllPodsDelete**](docs/PodsApi.md#clearallpodsdelete) | **DELETE** /pods | Terminate all running Pods
*PodsApi* | [**createPodsPost**](docs/PodsApi.md#createpodspost) | **POST** /pods | Create a Pod
*PodsApi* | [**deletePodsIdDelete**](docs/PodsApi.md#deletepodsiddelete) | **DELETE** /pods/{id} | Terminate a running Pod
*PodsApi* | [**fetchPodParamsPodsArgumentsGet**](docs/PodsApi.md#fetchpodparamspodsargumentsget) | **GET** /pods/arguments | Get all accept arguments of a Pod
*PodsApi* | [**getItemsPodsGet**](docs/PodsApi.md#getitemspodsget) | **GET** /pods | Get all alive Pods&#39; status
*PodsApi* | [**statusPodsIdGet**](docs/PodsApi.md#statuspodsidget) | **GET** /pods/{id} | Get status of a running Pod
*WorkspacesApi* | [**clearAllWorkspacesDelete**](docs/WorkspacesApi.md#clearallworkspacesdelete) | **DELETE** /workspaces | Deleting all Workspaces
*WorkspacesApi* | [**createWorkspacesPost**](docs/WorkspacesApi.md#createworkspacespost) | **POST** /workspaces | Upload files to a workspace
*WorkspacesApi* | [**deleteWorkspacesIdDelete**](docs/WorkspacesApi.md#deleteworkspacesiddelete) | **DELETE** /workspaces/{id} | Deleting an existing Workspace
*WorkspacesApi* | [**getItemsWorkspacesGet**](docs/WorkspacesApi.md#getitemsworkspacesget) | **GET** /workspaces | Get all existing Workspaces&#39; status
*WorkspacesApi* | [**listWorkspacesIdGet**](docs/WorkspacesApi.md#listworkspacesidget) | **GET** /workspaces/{id} | Get the status of an existing Workspace


## Documentation For Models

 - [DaemonStatus](docs/DaemonStatus.md)
 - [FlowItemStatus](docs/FlowItemStatus.md)
 - [FlowStoreStatus](docs/FlowStoreStatus.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [PeaModel](docs/PeaModel.md)
 - [PodModel](docs/PodModel.md)
 - [StoreItemStatus](docs/StoreItemStatus.md)
 - [StoreStatus](docs/StoreStatus.md)
 - [ValidationError](docs/ValidationError.md)


## Documentation For Authorization

 All endpoints do not require authorization.

