import {
    defineConfig,
    presetUno,
    presetAttributify,
    presetIcons,
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
        }),
    ],

    rules: [
        ['shadow-card', { 'box-shadow': '' }]
    ],

    transformers: [ transformerDirectives() ]
})