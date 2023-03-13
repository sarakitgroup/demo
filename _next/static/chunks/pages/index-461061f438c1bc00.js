(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(1457)
            }])
        },
        1457: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                default: function() {
                    return Index
                }
            });
            var jsx_runtime = __webpack_require__(5893),
                react = __webpack_require__(7294),
                next_router = __webpack_require__(1163),
                head = __webpack_require__(9008),
                head_default = __webpack_require__.n(head),
                next_image = __webpack_require__(5675),
                image_default = __webpack_require__.n(next_image),
                tslib_es6 = __webpack_require__(655);

            function arrayIncludes(e, n) {
                return -1 !== e.indexOf(n)
            }

            function strIncludes(e, n) {
                return -1 !== e.indexOf(n)
            }

            function getObjectProps(e) {
                return Object.getOwnPropertyNames(e)
            }

            function includes(e) {
                for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                for (var r = function(n) {
                        if ("string" == typeof n) {
                            if (arrayIncludes(e, n)) return {
                                value: !0
                            }
                        } else if (null != function(e, n) {
                                if (("find" in e)) return e.find(n);
                                for (var t = 0; t < e.length; t++)
                                    if (n(e[t], t, e)) return e[t]
                            }(e, function(e) {
                                return n.test(e)
                            })) return {
                            value: !0
                        }
                    }, i = 0; i < n.length; i++) {
                    var o = r(n[i]);
                    if ("object" == typeof o) return o.value
                }
                return !1
            }

            function countTruthy(e) {
                return e.reduce(function(e, n) {
                    return e + (n ? 1 : 0)
                }, 0)
            }
            var BotdError = function(e) {
                function n(t, r) {
                    var i = e.call(this, r) || this;
                    return i.state = t, i.name = "BotdError", Object.setPrototypeOf(i, n.prototype), i
                }
                return (0, tslib_es6.__extends)(n, e), n
            }(Error);

            function getBrowserEngineKind() {
                var e, n, t = window,
                    r = navigator;
                return countTruthy(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, 0 === r.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in t, "BatteryManager" in t, "webkitMediaStream" in t, "webkitSpeechGrammar" in t, ]) >= 5 ? "chromium" : countTruthy(["ApplePayError" in t, "CSSPrimitiveValue" in t, "Counter" in t, 0 === r.vendor.indexOf("Apple"), "getStorageUpdates" in r, "WebKitMediaKeys" in t, ]) >= 4 ? "webkit" : countTruthy(["buildID" in navigator, "MozAppearance" in (null !== (n = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}), "onmozfullscreenchange" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t, ]) >= 4 ? "gecko" : "unknown"
            }

            function getBrowserKind() {
                var e, n = null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.toLowerCase();
                if (strIncludes(n, "wechat")) return "wechat";
                if (strIncludes(n, "firefox")) return "firefox";
                if (strIncludes(n, "opera") || strIncludes(n, "opr")) return "opera";
                if (strIncludes(n, "chrome")) return "chrome";
                if (strIncludes(n, "safari")) return "safari";
                else if (strIncludes(n, "trident") || strIncludes(n, "msie")) return "internet_explorer";
                else return "unknown"
            }
            var detectors = {
                    detectAppVersion: function(e) {
                        var n = e.appVersion;
                        return 0 === n.state && (/headless/i.test(n.value) ? "headless_chrome" : /electron/i.test(n.value) ? "electron" : /slimerjs/i.test(n.value) ? "slimerjs" : void 0)
                    },
                    detectDocumentAttributes: function(e) {
                        var n = e.documentElementKeys;
                        return 0 === n.state && (includes(n.value, "selenium", "webdriver", "driver") ? "selenium" : void 0)
                    },
                    detectDocumentProperties: function(e) {
                        var n = e.documentProps;
                        return 0 === n.state && (includes(n.value, "selenium", "__fxdriver_unwrapped", "__selenium_unwrapped", "__webdriver_evaluate", "__driver_evaluate", "__webdriver_unwrapped", "__driver_unwrapped", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__webdriverFunc", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw", "selenium-evaluate", "_Selenium_IDE_Recorder", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/) ? "selenium" : void 0)
                    },
                    detectErrorTrace: function(e) {
                        var n = e.errorTrace;
                        return 0 === n.state && (/PhantomJS/i.test(n.value) ? "phantomjs" : void 0)
                    },
                    detectEvalLengthInconsistency: function(e) {
                        var n = e.evalLength;
                        if (0 === n.state) {
                            var t = n.value,
                                r = getBrowserKind(),
                                i = getBrowserEngineKind();
                            return 37 === t && !arrayIncludes(["webkit", "gecko"], i) || 39 === t && !arrayIncludes(["internet_explorer"], r) || 33 === t && !arrayIncludes(["chromium"], i)
                        }
                    },
                    detectFunctionBind: function(e) {
                        if (-2 === e.functionBind.state) return "phantomjs"
                    },
                    detectLanguagesLengthInconsistency: function(e) {
                        var n = e.languages;
                        if (0 === n.state && 0 === n.value.length) return "headless_chrome"
                    },
                    detectNotificationPermissions: function(e) {
                        var n = e.notificationPermissions;
                        return "chrome" === getBrowserKind() && (0 === n.state && n.value ? "headless_chrome" : void 0)
                    },
                    detectPluginsArray: function(e) {
                        var n = e.pluginsArray;
                        if (0 === n.state && !n.value) return "headless_chrome"
                    },
                    detectPluginsLengthInconsistency: function(e) {
                        var n = e.pluginsLength;
                        if (0 === n.state) {
                            var t = getBrowserEngineKind();
                            if (!("chromium" === t && function() {
                                    var e = getBrowserEngineKind(),
                                        n = "chromium" === e,
                                        t = "gecko" === e;
                                    if (!n && !t) return !1;
                                    var r = window;
                                    return countTruthy(["onorientationchange" in r, "orientation" in r, n && !("SharedWorker" in r), t && /android/i.test(navigator.appVersion), ]) >= 2
                                }()) && ("webkit" !== t || function() {
                                    if ("webkit" !== getBrowserEngineKind()) return !1;
                                    var e = window;
                                    return countTruthy(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator), ]) >= 3
                                }()) && 0 === n.value) return "headless_chrome"
                        }
                    },
                    detectProcess: function(e) {
                        var n, t = e.process;
                        return 0 === t.state && ("renderer" === t.value.type || (null === (n = t.value.versions) || void 0 === n ? void 0 : n.electron) != null ? "electron" : void 0)
                    },
                    detectUserAgent: function(e) {
                        var n = e.userAgent;
                        return 0 === n.state && (/PhantomJS/i.test(n.value) ? "phantomjs" : /Headless/i.test(n.value) ? "headless_chrome" : /Electron/i.test(n.value) ? "electron" : /slimerjs/i.test(n.value) ? "slimerjs" : void 0)
                    },
                    detectWebDriver: function(e) {
                        var n = e.webDriver;
                        if (0 === n.state && n.value) return "headless_chrome"
                    },
                    detectWebGL: function(e) {
                        var n = e.webGL;
                        if (0 === n.state) {
                            var t = n.value,
                                r = t.vendor,
                                i = t.renderer;
                            if ("Brian Paul" == r && "Mesa OffScreen" == i) return "headless_chrome"
                        }
                    },
                    detectWindowExternal: function(e) {
                        var n = e.windowExternal;
                        return 0 === n.state && (/Sequentum/i.test(n.value) ? "sequentum" : void 0)
                    },
                    detectWindowProperties: function(e) {
                        var n = e.windowProps;
                        return 0 === n.state && (includes(n.value, "webdriver", "domAutomation", "domAutomationController") ? "headless_chrome" : includes(n.value, "_selenium", "_Selenium_IDE_Recorder", "callSelenium") ? "selenium" : includes(n.value, "callPhantom", "_phantom") ? "phantomjs" : includes(n.value, "__nightmare") ? "nightmare" : includes(n.value, "emit") ? "couchjs" : includes(n.value, "spawn") ? "rhino" : includes(n.value, "CefSharp") ? "cefsharp" : void 0)
                    },
                    detectWindowSize: function(e) {
                        var n = e.windowSize;
                        if (0 !== n.state) return !1;
                        var t = n.value,
                            r = t.outerWidth,
                            i = t.outerHeight;
                        if (void 0 !== document.hasFocus && document.hasFocus() && 0 === r && 0 === i) return "headless_chrome"
                    },
                    detectMimeTypesConsistent: function(e) {
                        var n = e.mimeTypesConsistent;
                        if (0 === n.state && !n.value) return "unknown"
                    },
                    detectProductSub: function(e) {
                        var n = e.productSub;
                        if (0 !== n.state) return !1;
                        var t = getBrowserKind();
                        if (("chrome" === t || "safari" === t || "opera" === t || "wechat" === t) && "20030107" !== n.value) return "unknown"
                    }
                },
                sources = {
                    userAgent: function() {
                        return navigator.userAgent
                    },
                    appVersion: function() {
                        var e = navigator.appVersion;
                        if (void 0 == e) throw new BotdError(-1, "navigator.appVersion is undefined");
                        return e
                    },
                    rtt: function() {
                        if (void 0 === navigator.connection) throw new BotdError(-1, "navigator.connection is undefined");
                        if (void 0 === navigator.connection.rtt) throw new BotdError(-1, "navigator.connection.rtt is undefined");
                        return navigator.connection.rtt
                    },
                    windowSize: function() {
                        return {
                            outerWidth: window.outerWidth,
                            outerHeight: window.outerHeight,
                            innerWidth: window.innerWidth,
                            innerHeight: window.innerHeight
                        }
                    },
                    pluginsLength: function() {
                        if (void 0 === navigator.plugins) throw new BotdError(-1, "navigator.plugins is undefined");
                        return navigator.plugins.length
                    },
                    pluginsArray: function() {
                        if (void 0 === navigator.plugins) throw new BotdError(-1, "navigator.plugins is undefined");
                        if (void 0 === window.PluginArray) throw new BotdError(-1, "window.PluginArray is undefined");
                        return navigator.plugins instanceof PluginArray
                    },
                    errorTrace: function() {
                        try {
                            null[0]()
                        } catch (e) {
                            if (e instanceof Error && null != e.stack) return e.stack.toString()
                        }
                        throw new BotdError(-3, "errorTrace signal unexpected behaviour")
                    },
                    productSub: function() {
                        var e = navigator.productSub;
                        if (void 0 === e) throw new BotdError(-1, "navigator.productSub is undefined");
                        return e
                    },
                    windowExternal: function() {
                        if (void 0 === window.external) throw new BotdError(-1, "window.external is undefined");
                        var e = window.external;
                        if ("function" != typeof e.toString) throw new BotdError(-2, "window.external.toString is not a function");
                        return e.toString()
                    },
                    mimeTypesConsistent: function() {
                        if (void 0 === navigator.mimeTypes) throw new BotdError(-1, "navigator.mimeTypes is undefined");
                        for (var e = navigator.mimeTypes, n = Object.getPrototypeOf(e) === MimeTypeArray.prototype, t = 0; t < e.length; t++) n && (n = Object.getPrototypeOf(e[t]) === MimeType.prototype);
                        return n
                    },
                    evalLength: function getEvalLength() {
                        return eval.toString().length
                    },
                    webGL: function() {
                        var e, n = document.createElement("canvas");
                        if ("function" != typeof n.getContext) throw new BotdError(-2, "HTMLCanvasElement.getContext is not a function");
                        var t = n.getContext("webgl");
                        if (null === t) throw new BotdError(-4, "WebGLRenderingContext is null");
                        if ("function" != typeof t.getParameter) throw new BotdError(-2, "WebGLRenderingContext.getParameter is not a function");
                        return {
                            vendor: t.getParameter(t.VENDOR),
                            renderer: t.getParameter(t.RENDERER)
                        }
                    },
                    webDriver: function() {
                        if (void 0 == navigator.webdriver) throw new BotdError(-1, "navigator.webdriver is undefined");
                        return navigator.webdriver
                    },
                    languages: function() {
                        var e, n = navigator,
                            t = [],
                            r = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
                        if (void 0 !== r && t.push([r]), Array.isArray(n.languages)) !("chromium" === getBrowserEngineKind() && (e = window, countTruthy([!("MediaSettingsRange" in e), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]", ]) >= 3)) && t.push(n.languages);
                        else if ("string" == typeof n.languages) {
                            var i = n.languages;
                            i && t.push(i.split(","))
                        }
                        return t
                    },
                    notificationPermissions: function() {
                        return (0, tslib_es6.__awaiter)(this, void 0, void 0, function() {
                            var e, n;
                            return (0, tslib_es6.__generator)(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (void 0 === window.Notification) throw new BotdError(-1, "window.Notification is undefined");
                                        if (void 0 === navigator.permissions) throw new BotdError(-1, "navigator.permissions is undefined");
                                        if ("function" != typeof(e = navigator.permissions).query) throw new BotdError(-2, "navigator.permissions.query is not a function");
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, e.query({
                                            name: "notifications"
                                        })];
                                    case 2:
                                        return n = t.sent(), [2, "denied" === window.Notification.permission && "prompt" === n.state];
                                    case 3:
                                        throw t.sent(), new BotdError(-3, "notificationPermissions signal unexpected behaviour");
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    },
                    documentElementKeys: function() {
                        if (void 0 === document.documentElement) throw new BotdError(-1, "document.documentElement is undefined");
                        var e = document.documentElement;
                        if ("function" != typeof e.getAttributeNames) throw new BotdError(-2, "document.documentElement.getAttributeNames is not a function");
                        return e.getAttributeNames()
                    },
                    functionBind: function() {
                        if (void 0 === Function.prototype.bind) throw new BotdError(-2, "Function.prototype.bind is undefined");
                        return Function.prototype.bind.toString()
                    },
                    process: function() {
                        if (void 0 === window.process) throw new BotdError(-1, "window.process is undefined");
                        return window.process
                    },
                    documentProps: function() {
                        if (void 0 === window.document) throw new BotdError(-1, "window.document is undefined");
                        return getObjectProps(window.document)
                    },
                    windowProps: function() {
                        return getObjectProps(window)
                    }
                },
                BotDetector = function() {
                    function e() {
                        this.components = void 0, this.detections = void 0
                    }
                    return e.prototype.getComponents = function() {
                        return this.components
                    }, e.prototype.getDetections = function() {
                        return this.detections
                    }, e.prototype.getSources = function() {
                        return sources
                    }, e.prototype.getDetectors = function() {
                        return detectors
                    }, e.prototype.detect = function() {
                        if (void 0 === this.components) throw Error("BotDetector.detect can't be called before BotDetector.collect");
                        var e = this.components,
                            n = this.getDetectors(),
                            t = {},
                            r = {
                                bot: !1
                            };
                        for (var i in n) {
                            var o = (0, n[i])(e),
                                a = {
                                    bot: !1
                                };
                            "string" == typeof o ? a = {
                                bot: !0,
                                botKind: o
                            } : o && (a = {
                                bot: !0,
                                botKind: "unknown"
                            }), t[i] = a, a.bot && (r = a)
                        }
                        return this.detections = t, r
                    }, e.prototype.collect = function() {
                        return (0, tslib_es6.__awaiter)(this, void 0, void 0, function() {
                            var e, n, t, r = this;
                            return (0, tslib_es6.__generator)(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = this.getSources(), n = {}, [4, Promise.all(Object.keys(e).map(function(t) {
                                            return (0, tslib_es6.__awaiter)(r, void 0, void 0, function() {
                                                var r, i, o, a, u;
                                                return (0, tslib_es6.__generator)(this, function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            r = e[t], s.label = 1;
                                                        case 1:
                                                            return s.trys.push([1, 3, , 4]), i = n, o = t, u = {}, [4, r()];
                                                        case 2:
                                                            return i[o] = (u.value = s.sent(), u.state = 0, u), [3, 4];
                                                        case 3:
                                                            return (a = s.sent()) instanceof BotdError ? n[t] = {
                                                                state: a.state,
                                                                error: "".concat(a.name, ": ").concat(a.message)
                                                            } : n[t] = {
                                                                state: -3,
                                                                error: a instanceof Error ? "".concat(a.name, ": ").concat(a.message) : String(a)
                                                            }, [3, 4];
                                                        case 4:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }))];
                                    case 1:
                                        return t.sent(), this.components = n, [2, this.components]
                                }
                            })
                        })
                    }, e
                }();

            function Index() {
                var e = (0, next_router.useRouter)();
                return (0, react.useEffect)(function() {
                    (function(e) {
                        var n = (void 0 === e ? {} : e).monitoring,
                            t = void 0 === n || n;
                        return (0, tslib_es6.__awaiter)(this, void 0, void 0, function() {
                            var e;
                            return (0, tslib_es6.__generator)(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t && function() {
                                            if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                                                var e = new XMLHttpRequest;
                                                e.open("get", "https://m1.openfpcdn.io/botd/v".concat("1.3.1", "/npm-monitoring"), !0), e.send()
                                            } catch (n) {
                                                console.error(n)
                                            }
                                        }(), [4, (e = new BotDetector).collect()];
                                    case 1:
                                        return n.sent(), [2, e]
                                }
                            })
                        })
                    })().then(function(e) {
                        return e.detect()
                    }).then(function(n) {
                        console.log(n), !1 == n.bot && setTimeout(function() {
                            e.push("/f1")
                        }, 200)
                    }).catch(function(e) {
                        return console.error(e)
                    })
                }, [e]), (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [(0, jsx_runtime.jsx)(head_default(), {
                        children: (0, jsx_runtime.jsx)("title", {
                            children: "Wellcome"
                        })
                    }), (0, jsx_runtime.jsxs)("div", {
                        className: "text-center loading-fast",
                        children: [(0, jsx_runtime.jsx)(image_default(), {
                            src: "https://hblv1gg3jw.web.app/spinner.gif",
                            alt: "loading",
                            quality: 100,
                            layout: "fixed",
                            width: 100,
                            height: 100
                        }), (0, jsx_runtime.jsx)("h1")]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [345, 774, 888, 179], function() {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);