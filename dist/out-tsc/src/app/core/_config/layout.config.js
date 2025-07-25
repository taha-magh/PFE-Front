var LayoutConfig = /** @class */ (function () {
    function LayoutConfig() {
        this.defaults = {
            demo: "demo5",
            // == Base Layout
            self: {
                layout: "fluid",
                body: {
                    "background-image": "./assets/media/misc/bg-1.jpg",
                },
                logo: {
                    desktop: "./assets/media/logos/logo",
                    sticky: "./assets/media/logos/logo",
                },
            },
            // == Page Splash Screen loading
            loader: {
                enabled: true,
                type: "spinner-logo",
                logo: "./assets/media/logos/logo",
                message: "Please wait...",
            },
            // == Colors for javascript
            colors: {
                state: {
                    brand: "#3d94fb",
                    light: "#ffffff",
                    dark: "#282a3c",
                    primary: "#5867dd",
                    success: "#34bfa3",
                    info: "#3d94fb",
                    warning: "#ffb822",
                    danger: "#fd27eb",
                },
                base: {
                    label: ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
                    shape: ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"],
                },
            },
            header: {
                self: {
                    width: "fixed",
                    fixed: {
                        desktop: {
                            enabled: true,
                            mode: "topbar",
                        },
                        mobile: true,
                    },
                },
                menu: {
                    self: {
                        display: true,
                        "root-arrow": false,
                    },
                    desktop: {
                        arrow: true,
                        toggle: "click",
                        submenu: {
                            skin: "light",
                            arrow: true,
                        },
                    },
                    mobile: {
                        submenu: {
                            skin: "dark",
                            accordion: true,
                        },
                    },
                },
            },
            subheader: {
                display: true,
                fixed: false,
                layout: "subheader-v1",
                width: "fixed",
                style: "transparent",
            },
            aside: {
                self: {
                    fixed: true,
                    display: false,
                    minimize: {
                        toggle: true,
                        default: false,
                    },
                },
                menu: {
                    dropdown: false,
                    scroll: true,
                    submenu: {
                        accordion: true,
                        dropdown: {
                            arrow: true,
                            "hover-timeout": 500,
                        },
                    },
                },
            },
            content: {
                width: "fixed",
            },
            footer: {
                self: {
                    width: "fixed",
                    layout: "extended",
                },
            },
        };
    }
    Object.defineProperty(LayoutConfig.prototype, "configs", {
        /**
         * Good place for getting the remote config
         */
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return LayoutConfig;
}());
export { LayoutConfig };
//# sourceMappingURL=layout.config.js.map