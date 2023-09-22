import {
    defineConfig,
    presetUno,
    presetAttributify,
    presetIcons,
    presetWebFonts,
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
        }),
        presetWebFonts({
            provider: 'google',
            fonts: {
                lato: [
                    {
                        name: 'Lato',
                    },
                ],
            },
        }),
    ],

    rules: [
        ['shadow-card', { 'box-shadow': '' }],
    ],

    transformers: [ transformerDirectives() ],
})