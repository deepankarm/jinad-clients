export * from './daemonApi';
import { DaemonApi } from './daemonApi';
export * from './flowsApi';
import { FlowsApi } from './flowsApi';
export * from './logsApi';
import { LogsApi } from './logsApi';
export * from './peasApi';
import { PeasApi } from './peasApi';
export * from './podsApi';
import { PodsApi } from './podsApi';
export * from './workspacesApi';
import { WorkspacesApi } from './workspacesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DaemonApi, FlowsApi, LogsApi, PeasApi, PodsApi, WorkspacesApi];
