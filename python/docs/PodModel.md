# PodModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  The name of this object.  This will be used in the following places: - how you refer to this object in Python/YAML/CLI - log message - ...  When not given, then the default naming strategy will apply.                      | [optional] 
**log_config** | **str** | The YAML config of the logger used in this object. | [optional]  if omitted the server will use the default value of "/home/deepankar/coding/repos/jina/jina/resources/logging.default.yml"
**hide_exc_info** | **bool** | If set, then exception stack information to be added to the logging message, useful in debugging | [optional]  if omitted the server will use the default value of False
**port_ctrl** | **int** | The port for controlling the runtime, default a random port between [49152, 65535] | [optional] 
**ctrl_with_ipc** | **bool** | If set, use ipc protocol for control socket | [optional]  if omitted the server will use the default value of False
**timeout_ctrl** | **int** | The timeout in milliseconds of the control request, -1 for waiting forever | [optional]  if omitted the server will use the default value of 5000
**ssh_server** | **str** | The SSH server through which the tunnel will be created, can actually be a fully specified &#x60;user@server:port&#x60; ssh url. | [optional] 
**ssh_keyfile** | **str** | This specifies a key to be used in ssh login, default None. regular default ssh keys will be used without specifying this argument. | [optional] 
**ssh_password** | **str** | The ssh password to the ssh server. | [optional] 
**uses** | **str** |  The config of the executor, it could be one of the followings:  - an Executor-level YAML file path (*.yml/yaml)  - a name of a class inherited from &#x60;jina.Executor&#x60; - a docker image (must start with &#x60;docker://&#x60;) - builtin executors, e.g. &#x60;_pass&#x60;, &#x60;_logforward&#x60;, &#x60;_merge&#x60;  - the string literal of a YAML config (must start with &#x60;!&#x60;) - the string literal of a JSON config - the string literal of a YAML driver config (must start with &#x60;- !!&#x60;)  When use it under Python, one can use the following values additionally: - a Python dict that represents the config - a text file stream has &#x60;.read()&#x60; interface  | [optional]  if omitted the server will use the default value of "_pass"
**py_modules** | **[str]** |  The customized python modules need to be imported before loading the executor  Note, when importing multiple files and there is a dependency between them, then one has to write the dependencies in  reverse order. That is, if &#x60;__init__.py&#x60; depends on &#x60;A.py&#x60;, which again depends on &#x60;B.py&#x60;, then you need to write:   --py-modules __init__.py --py-modules B.py --py-modules A.py   | [optional] 
**port_in** | **int** | The port for input data, default a random port between [49152, 65535] | [optional] 
**port_out** | **int** | The port for output data, default a random port between [49152, 65535] | [optional] 
**host_in** | **str** | The host address for input, by default it is 0.0.0.0 | [optional]  if omitted the server will use the default value of "0.0.0.0"
**host_out** | **str** | The host address for output, by default it is 0.0.0.0 | [optional]  if omitted the server will use the default value of "0.0.0.0"
**socket_in** | **str** | The socket type for input port | [optional]  if omitted the server will use the default value of "PULL_BIND"
**socket_out** | **str** | The socket type for output port | [optional]  if omitted the server will use the default value of "PUSH_BIND"
**dump_interval** | **int** | Serialize the model in the pod every n seconds if model changes. -1 means --read-only.  | [optional]  if omitted the server will use the default value of 240
**read_only** | **bool** | If set, do not allow the pod to modify the model, dump_interval will be ignored | [optional]  if omitted the server will use the default value of False
**memory_hwm** | **int** | The memory high watermark of this pod in Gigabytes, pod will restart when this is reached. -1 means no restriction | [optional]  if omitted the server will use the default value of -1
**on_error_strategy** | **str** |  The skip strategy on exceptions.  - IGNORE: Ignore it, keep running all Drivers &amp; Executors logics in the sequel flow - SKIP_EXECUTOR: Skip all Executors in the sequel, but drivers are still called - SKIP_HANDLE: Skip all Drivers &amp; Executors in the sequel, only &#x60;pre_hook&#x60; and &#x60;post_hook&#x60; are called - THROW_EARLY: Immediately throw the exception, the sequel flow will not be running at all                       Note, &#x60;IGNORE&#x60;, &#x60;SKIP_EXECUTOR&#x60; and &#x60;SKIP_HANDLE&#x60; do not guarantee the success execution in the sequel flow. If something  is wrong in the upstream, it is hard to carry this exception and moving forward without any side-effect.  | [optional]  if omitted the server will use the default value of "IGNORE"
**num_part** | **int** | the number of messages expected from upstream, 0 and 1 means single part | [optional]  if omitted the server will use the default value of 0
**uses_internal** | **str** |  The config runs inside the Docker container.   Syntax and function are the same as &#x60;--uses&#x60;. This is designed when &#x60;--uses&#x3D;\&quot;docker://...\&quot;&#x60; this config is passed to  the Docker container.  | [optional]  if omitted the server will use the default value of "BaseExecutor"
**entrypoint** | **str** | The entrypoint command overrides the ENTRYPOINT in Docker image. when not set then the Docker image ENTRYPOINT takes effective. | [optional] 
**pull_latest** | **bool** | Pull the latest image before running | [optional]  if omitted the server will use the default value of False
**volumes** | **[str]** |  The path on the host to be mounted inside the container.   Note,  - If separated by &#x60;:&#x60;, then the first part will be considered as the local host path and the second part is the path in the container system.  - If no split provided, then the basename of that directory will be mounted into container&#39;s root path, e.g. &#x60;--volumes&#x3D;\&quot;/user/test/my-workspace\&quot;&#x60; will be mounted into &#x60;/my-workspace&#x60; inside the container.  - All volumes are mounted with read-write mode.  | [optional] 
**host** | **str** | The host address of the runtime, by default it is 0.0.0.0. | [optional]  if omitted the server will use the default value of "0.0.0.0"
**port_expose** | **int** | The port of the host exposed to the public | [optional] 
**silent_remote_logs** | **bool** | Do not display the streaming of remote logs on local console | [optional]  if omitted the server will use the default value of False
**upload_files** | **[str]** |  The files on the host to be uploaded to the remote workspace. This can be useful when your Pod has more file dependencies beyond a single YAML file, e.g. Python files, data files.  Note, - currently only flatten structure is supported, which means if you upload &#x60;[./foo/a.py, ./foo/b.pp, ./bar/c.yml]&#x60;, then they will be put under the _same_ workspace on the remote, losing all hierarchies. - by default, &#x60;--uses&#x60; YAML file is always uploaded. - uploaded files are by default isolated across the runs. To ensure files are submitted to the same workspace across different runs, use &#x60;--workspace-id&#x60; to specify the workspace.  | [optional] 
**workspace_id** | **str** | the UUID for identifying the workspace. When not given a random id will be assigned.Multiple Pea/Pod/Flow will work under the same workspace if they share the same &#x60;workspace-id&#x60;. | [optional] 
**daemon** | **bool** | The Pea attempts to terminate all of its Runtime child processes/threads on existing. setting it to true basically tell the Pea do not wait on the Runtime when closing | [optional]  if omitted the server will use the default value of False
**runtime_backend** | **str** | The parallel backend of the runtime inside the Pea | [optional]  if omitted the server will use the default value of "PROCESS"
**runtime_cls** | **str** | The runtime class to run inside the Pea | [optional]  if omitted the server will use the default value of "ZEDRuntime"
**timeout_ready** | **int** | The timeout in milliseconds of a Pea waits for the runtime to be ready, -1 for waiting forever | [optional]  if omitted the server will use the default value of 60000
**expose_public** | **bool** | If set, expose the public IP address to remote when necessary, by default it exposesprivate IP address, which only allows accessing under the same network/subnet. Important to set this to true when the Pea will receive input connections from remote Peas | [optional]  if omitted the server will use the default value of False
**pea_id** | **int** | defines the suffix for the workspace path of the pea&#x60; | [optional]  if omitted the server will use the default value of 0
**pea_role** | **str** | The role of this Pea in a Pod | [optional]  if omitted the server will use the default value of "SINGLETON"
**uses_before** | **str** | The executor attached after the Peas described by --uses, typically before sending to all parallels, accepted type follows &#x60;--uses&#x60; | [optional] 
**uses_after** | **str** | The executor attached after the Peas described by --uses, typically used for receiving from all parallels, accepted type follows &#x60;--uses&#x60; | [optional] 
**parallel** | **int** | The number of parallel peas in the pod running at the same time, &#x60;port_in&#x60; and &#x60;port_out&#x60; will be set to random, and routers will be added automatically when necessary | [optional]  if omitted the server will use the default value of 1
**polling** | **str** |  The polling strategy of the Pod (when &#x60;parallel&gt;1&#x60;)  - ANY: only one (whoever is idle) Pea polls the message - ALL: all Peas poll the message (like a broadcast)  | [optional]  if omitted the server will use the default value of "ANY"
**scheduling** | **str** | The strategy of scheduling workload among Peas | [optional]  if omitted the server will use the default value of "LOAD_BALANCE"
**pod_role** | **str** | The role of this pod in the flow | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


