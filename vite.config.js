import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())}

    return defineConfig({
        plugins: [vue()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        }
    })
}
