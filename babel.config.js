module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "react-native-reanimated/plugin",
            [
                "module-resolver",
                {
                    extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
                    alias: {
                        "@components": "./src/components",
                        "@screens": "./src/screens",
                        "@styles": "./src/styles",
                        "@utils": "./src/utils",
                        "@mock": "./src/mock",
                        "@models": "./src/models",
                        "@navigation": "./src/navigation",
                        "@services": "./src/services",
                        "@store": "./src/store"
                    },
                },
            ],
        ],
    };
};
