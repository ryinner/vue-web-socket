import createWebSocket from '@ryinner/web-socket-manager';
import { inject, type Plugin } from 'vue';

let ws!: ReturnType<typeof createWebSocket>;

const plugin: Plugin<Parameters<typeof createWebSocket>> = {
    install: (app, wsSettings) => {
        ws = createWebSocket(wsSettings);

        app.config.globalProperties.$webSocket = ws;
        app.provide('$webSocket', ws);
    }
};

declare module 'vue' {
    interface ComponentCustomProperties {
        $webSocket: typeof ws;
    }
}

export { plugin as VueWebSocket };
export function useWebSocket (): typeof ws | undefined {
    return inject('$webSocket');
}
