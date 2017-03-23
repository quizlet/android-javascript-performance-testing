! function(a, b) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = b();
    else if ("function" == typeof define && define.amd) define([], b);
    else {
        var c = b();
        for (var d in c)("object" == typeof exports ? exports : a)[d] = c[d]
    }
}(this, function() {
    return function(a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
        }
        var c = {};
        return b.m = a, b.c = c, b.p = "", b(0)
    }([function(a, b, c) {
        (function(a) {
            "use strict";

            function b(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }
            var d = c(19),
                e = b(d);
            a.LearnModeGraderFactory = e.default
        })
        .call(b, function() {
            return this
        }())
    }, function(a, b) {
        "use strict";
        b.__esModule = !0, b.default = function(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(a, b, c) {
        a.exports = !c(3)(function() {
            return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                })
                .a
        })
    }, function(a, b) {
        a.exports = function(a) {
            try {
                return !!a()
            } catch (a) {
                return !0
            }
        }
    }, function(a, b) {
        var c = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = c)
    }, function(a, b) {
        a.exports = function(a) {
            return "object" == typeof a ? null !== a : "function" == typeof a
        }
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function e(a, b) {
            var c = a.match(/^(the|a) /i),
                d = b.replace(/^(the|a)/i, c[1]);
            return [a, d]
        }
        b.__esModule = !0, b.IgnoreArticlesClauses = b.NoArticlesAnywhereForSpanish = b.NoArticlesAnywhereForFrench = b.NoArticleOnSpanishPrompt = b.NoArticleOnFrenchPrompt = b.NoArticleOnEnglishAnswerForSpanish = b.NoArticleOnEnglishAnswerForFrench = b.NoArticleOnEnglishPromptForSpanish = b.NoArticleOnEnglishPromptForFrench = b.NormalizeSharpSInAnswerForGerman = b.AlwaysNormalizeSimilarCharactersClause = b.AlwaysStripMarkdownClause = void 0;
        var f = c(7),
            g = d(f),
            h = c(9),
            i = d(h),
            j = c(8),
            k = d(j),
            l = (b.AlwaysStripMarkdownClause = (new g.default)
                .withCondition(!0)
                .withTransform(function(a, b) {
                    return [(0, i.default)(a), (0, i.default)(b)]
                }), b.AlwaysNormalizeSimilarCharactersClause = (new g.default)
                .withCondition(!0)
                .withTransform(function(a, b) {
                    return [(0, k.default)(a), (0, k.default)(b)]
                }), b.NormalizeSharpSInAnswerForGerman = (new g.default)
                .withCondition(function(a, b, c) {
                    var d = c.answerLanguage;
                    return "de" === d
                })
                .withTransform(function(a, b) {
                    return [a.replace(/ß/g, "ss"), b.replace(/ß/g, "ss")]
                }), {
                    french: [/^(la|une) /i, /^(le|un) /i],
                    spanish: [/^(el|un) /i, /^(la|una) /i]
                }),
            m = b.NoArticleOnEnglishPromptForFrench = (new g.default)
            .withCondition(function(a, b, c) {
                return "en" === c.promptLanguage && "fr" === c.answerLanguage && !/^(the|a) /i.test(c.promptText)
            })
            .withTransform(function(a, b) {
                var c = b;
                return l.french.forEach(function(d) {
                    if (d.test(a) && d.test(b)) {
                        var e = a.match(d)[1];
                        c = b.replace(d, e + " ")
                    }
                }), [a, c]
            }),
            n = b.NoArticleOnEnglishPromptForSpanish = (new g.default)
            .withCondition(function(a, b, c) {
                return "en" === c.promptLanguage && "es" === c.answerLanguage && !/^(the|a) /i.test(a)
            })
            .withTransform(function(a, b) {
                var c = b;
                return l.spanish.forEach(function(d) {
                    if (d.test(a) && d.test(b)) {
                        var e = a.match(d)[1];
                        c = b.replace(d, e + " ")
                    }
                }), [a, c]
            }),
            o = b.NoArticleOnEnglishAnswerForFrench = (new g.default)
            .withCondition(function(a, b, c) {
                return "fr" === c.promptLanguage && "en" === c.answerLanguage && /^(la|une|un|le) /i.test(c.promptText) && /^(the|a) /i.test(b) && !/^(the|a) /i.test(a)
            })
            .withTransform(function(a, b) {
                return [a, b.replace(/^(the|a) /i, " ")]
            }),
            p = b.NoArticleOnEnglishAnswerForSpanish = (new g.default)
            .withCondition(function(a, b, c) {
                return "es" === c.promptLanguage && "en" === c.answerLanguage && /^(una|la|un|el) /i.test(c.promptText) && /^(the|a) /i.test(b) && !/^(the|a) /i.test(a)
            })
            .withTransform(function(a, b) {
                return [a, b.replace(/^(the|a) /i, " ")]
            }),
            q = b.NoArticleOnFrenchPrompt = (new g.default)
            .withCondition(function(a, b, c) {
                var d = b.match(/^(the|a) /i),
                    e = a.match(/^(the|a) /i);
                return "fr" === c.promptLanguage && "en" === c.answerLanguage && !/^(la|une|un|le) /i.test(c.promptText) && d && e && d[1] !== e[1]
            })
            .withTransform(function(a, b) {
                return e(a, b)
            }),
            r = b.NoArticleOnSpanishPrompt = (new g.default)
            .withCondition(function(a, b, c) {
                var d = b.match(/^(the|a) /i),
                    e = a.match(/^(the|a) /i);
                return "es" === c.promptLanguage && "en" === c.answerLanguage && !/^(una|la|un|el) /i.test(c.promptText) && d && e && d[1] !== e[1]
            })
            .withTransform(function(a, b) {
                return e(a, b)
            }),
            s = b.NoArticlesAnywhereForFrench = (new g.default)
            .withCondition(function(a, b, c) {
                return "fr" === c.promptLanguage && "en" === c.answerLanguage && !/^(la|une|un|le) /i.test(c.promptText) && /^(the|a) /i.test(b) && !/^(the|a) /i.test(a)
            })
            .withTransform(function(a, b) {
                return [a, b.replace(/^(the|a) /i, "")]
            }),
            t = b.NoArticlesAnywhereForSpanish = (new g.default)
            .withCondition(function(a, b, c) {
                return "es" === c.promptLanguage && "en" === c.answerLanguage && !/^(una|la|un|el) /i.test(c.promptText) && /^(the|a) /i.test(b) && !/^(the|a) /i.test(a)
            })
            .withTransform(function(a, b) {
                return [a, b.replace(/^(the|a) /i, "")]
            });
        b.IgnoreArticlesClauses = [m, n, o, p, q, r, s, t]
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        b.__esModule = !0;
        var e = c(1),
            f = d(e),
            g = function() {
                function a() {
                    (0, f.default)(this, a), this.condition = null, this.transform = null
                }
                return a.prototype.withCondition = function(a) {
                    return this.condition = a, this
                }, a.prototype.withTransform = function(a) {
                    return this.transform = a, this
                }, a.prototype.getCondition = function() {
                    return this.condition
                }, a.prototype.getTransform = function() {
                    return this.transform
                }, a
            }();
        b.default = g, a.exports = b.default
    }, function(a, b) {
        "use strict";

        function c(a) {
            for (var b = a, c = 0; c < b.length; c++) {
                var e = b.charAt(c);
                Object.prototype.hasOwnProperty.call(d, e) && (b = b.substring(0, c) + d[e] + b.substring(c + 1))
            }
            return b
        }
        b.__esModule = !0, b.default = c;
        var d = {
            "’": "'",
            "‘": "'",
            "”": '"',
            "“": '"',
            "…": "...",
            "\t": " ",
            " ": " ",
            "\0": "",
            "–": "-",
            "­": "",
            "（": " (",
            "´": "'",
            "）": ") ",
            "】": "] ",
            "【": " [",
            "，": ", ",
            "．": ". ",
            "×": "x",
            "ș": "ş",
            "œ": "oe",
            "æ": "ae",
            "　": " ",
            "、": ",",
            "。": ".",
            "〜": "~",
            "～": "~"
        };
        a.exports = b.default
    }, function(a, b) {
        "use strict";

        function c(a) {
            return a.replace(/\*([^*]+)\*/g, function(a, b) {
                return b
            })
        }
        b.__esModule = !0, b.default = c, a.exports = b.default
    }, function(a, b) {
        var c = a.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = c)
    }, function(a, b) {
        a.exports = function(a) {
            if (void 0 == a) throw TypeError("Can't call method on  " + a);
            return a
        }
    }, function(a, b, c) {
        var d = c(28);
        a.exports = Object("z")
            .propertyIsEnumerable(0) ? Object : function(a) {
                return "String" == d(a) ? a.split("") : Object(a)
            }
    }, function(a, b) {
        var c = Math.ceil,
            d = Math.floor;
        a.exports = function(a) {
            return isNaN(a = +a) ? 0 : (a > 0 ? d : c)(a)
        }
    }, function(a, b, c) {
        var d = c(12),
            e = c(11);
        a.exports = function(a) {
            return d(e(a))
        }
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        b.__esModule = !0;
        var e = c(1),
            f = d(e),
            g = c(8),
            h = d(g),
            i = c(9),
            j = d(i),
            k = function() {
                function a() {
                    var b = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                    (0, f.default)(this, a), this.rules = b
                }
                return a.prototype.grade = function(a, b, c) {
                    var d = [this.preProcess(a), this.preProcess(b)];
                    return this.applyRules(d, c, c)
                }, a.prototype.preProcess = function(a) {
                    var b = a;
                    return b = (0, h.default)(b), b = (0, j.default)(b)
                }, a.prototype.applyRules = function(a, b) {
                    for (var c = a[0], d = a[1], e = 0; e < this.rules.length; e++) {
                        var f = this.rules[e];
                        if (f.isMatch(c, d, b)) return !0
                    }
                    return !1
                }, a
            }();
        b.default = k, a.exports = b.default
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        b.__esModule = !0;
        var e = c(23),
            f = d(e),
            g = c(1),
            h = d(g),
            i = function() {
                function a(b) {
                    var c = arguments.length <= 1 || void 0 === arguments[1] ? "en" : arguments[1],
                        d = arguments.length <= 2 || void 0 === arguments[2] ? "en" : arguments[2];
                    (0, h.default)(this, a), this.name = b, this.answerLanguage = c, this.promptLanguage = d, this.clauses = []
                }
                return a.prototype.getName = function() {
                    return this.name
                }, a.prototype.getLang = function() {
                    return this.answerLanguage
                }, a.prototype.getAnswerLangauge = function() {
                    return this.answerLanguage
                }, a.prototype.getPromptLanguage = function() {
                    return this.promptLanguage
                }, a.prototype.getClauses = function() {
                    return this.clauses
                }, a.prototype.setName = function(a) {
                    this.name = a
                }, a.prototype.setLang = function(a) {
                    this.answerLanguage = a
                }, a.prototype.withName = function(a) {
                    return this.name = a, this
                }, a.prototype.withAnswerLanguage = function(a) {
                    return this.answerLanguage = a, this
                }, a.prototype.withPromptLanguage = function(a) {
                    return this.promptLanguage = a, this
                }, a.prototype.withClause = function(a) {
                    return this.withClauses([a]), this
                }, a.prototype.withClauses = function(a) {
                    var b;
                    return (b = this.clauses)
                        .push.apply(b, a), this
                }, a.prototype.cloneWithPrefixedClauses = function(b) {
                    return new a("(Prefixed) " + this.getName())
                        .withClauses(b)
                        .withClauses(this.getClauses())
                }, a.prototype.isMatch = function(a, b) {
                    var c = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        d = (0, f.default)({}, {
                            promptLanguage: this.promptLanguage,
                            answerLanguage: this.answerLanguage
                        }, c);
                    return this._evaluateClauses(a, b, d)
                }, a.prototype.applyClauses = function(a, b) {
                    var c = this,
                        d = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                    return this.clauses.reduce(function(a, b) {
                        return c._applyClause(b, a, d)
                    }, [a, b])
                }, a.prototype._evaluateClauses = function(a, b, c) {
                    var d = this.applyClauses(a, b, c),
                        e = d[0],
                        f = d[1];
                    return e === f
                }, a.prototype._applyClause = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = d,
                        g = e,
                        h = this._isConditionHeld(a.condition, d, e, c);
                    if (h) {
                        var i = this._getClauseTransformsResult(a, d, e);
                        f = i[0], g = i[1]
                    }
                    return [f, g]
                }, a.prototype._isConditionHeld = function(a, b, c, d) {
                    var e = !1;
                    return null === a ? e = !0 : "function" == typeof a ? e = a(b, c, d) : "boolean" == typeof a && (e = a), e
                }, a.prototype._getClauseTransformsResult = function(a, b, c) {
                    return Array.isArray(a.transform) ? a.transform.reduce(function(a, b) {
                        var c = a[0],
                            d = a[1];
                        return b(c, d)
                    }, [b, c]) : a.transform(b, c)
                }, a
            }();
        b.default = i, a.exports = b.default
    }, function(a, b, c) {
        "use strict";

        function d(a, b, c) {
            var d = c.answerLanguage;
            return k.caseSensitiveLanguages.indexOf(d) >= 0
        }

        function e(a, b, c) {
            var d = c.answerLanguage;
            return m.indexOf(d) >= 0
        }

        function f(a, b, c) {
            var d = c.answerLanguage;
            return l.indexOf(d) >= 0
        }

        function g(a) {
            var b = 3,
                c = /[.?!]/,
                d = /^[.?!]+$/,
                e = a.split(/\s+/g)
                .filter(function(a) {
                    return !d.test(a)
                })
                .length;
            return c.test(a) && e >= b
        }

        function h(a, b) {
            var c = /[;,\/]/;
            return c.test(a) || c.test(b)
        }

        function i(a, b) {
            var c = /[\(\[\)\]]/g;
            return c.test(a) || c.test(b)
        }

        function j(a, b, c) {
            var d = c.answerLanguage;
            return "zh-pi" === d
        }
        b.__esModule = !0, b.isCaseSensitive = d, b.isWhitespaceInsensitive = e, b.isScientific = f, b.isSentence = g, b.shouldReorder = h, b.containsParens = i, b.isPinyin = j;
        var k = c(51),
            l = ["chem", "math"],
            m = ["ja", "ja-ka", "zh-CN", "zh-TW"]
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function e(a, b) {
            return [s.default.convert(a), s.default.convert(b)]
        }

        function f(a, b) {
            return [a[0] + a.slice(1)
                .toLowerCase(), b[0] + b.slice(1)
                .toLowerCase()
            ]
        }

        function g(a, b) {
            return [a.toLowerCase(), b.toLowerCase()]
        }

        function h(a, b) {
            return [a.replace(/(\+|&)/g, "and"), b.replace(/(\+|&)/g, "and")]
        }

        function i(a, b) {
            return [a.replace(/(?!\b)-\b/g, "")
                .replace(/\b-(?!\b)/g, ""), b.replace(/(?!\b)-\b/g, "")
                .replace(/\b-(?!\b)/g, "")
            ]
        }

        function j(a, b) {
            var c = /\(([^)]+)\)/g;
            return [a.replace(c, ""), b.replace(c, "")]
        }

        function k(a, b) {
            return [a.split(/\s*[,;\/]\s*/)
                .sort()
                .join(","), b.split(/\s*[,;\/]\s*/)
                .sort()
                .join(",")
            ]
        }

        function l(a, b) {
            return [a.replace(/[\.,;!¿#\$\/:\[\]_\\"¡]/g, ""), b.replace(/[\.,;!¿#\$\/:\[\]_\\"¡]/g, "")]
        }

        function m(a, b) {
            return [a.replace(/[\(\)]/g, ""), b.replace(/[\(\)]/g, "")]
        }

        function n(a, b) {
            return [a.replace(t, ""), b.replace(t, "")]
        }

        function o(a, b) {
            var c = /\s+/g,
                d = (0, q.default)(a.replace(c, " ")),
                e = (0, q.default)(b.replace(c, " "));
            return d = d.replace(/\s-/g, "-")
                .replace(/-\s/g, "-"), e = e.replace(/\s-/g, "-")
                .replace(/-\s/g, "-"), d = d.replace(/\s=/g, "=")
                .replace(/\=\s/g, "="), e = e.replace(/\s=/g, "=")
                .replace(/\=\s/g, "="), [d, e]
        }
        b.__esModule = !0, b.convertPinyin = e, b.convertToSentenceCase = f, b.convertToLowerCase = g, b.normalizePlusAndAmpersand = h, b.removeTrailingDashes = i, b.removeParensAndContents = j, b.reorderOnSplitChars = k, b.removePunctuation = l, b.removeParens = m, b.removeWhitespace = n, b.postProcess = o;
        var p = c(22),
            q = d(p),
            r = c(52),
            s = d(r),
            t = /[\s\uFEFF\xA0\u3000]/g
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        b.__esModule = !0;
        var e = c(21),
            f = d(e),
            g = c(15),
            h = d(g),
            i = c(6),
            j = c(20),
            k = d(j),
            l = [i.AlwaysStripMarkdownClause, i.AlwaysNormalizeSimilarCharactersClause].concat(i.IgnoreArticlesClauses);
        b.default = (new f.default)
            .withFactoryMethod(function() {
                return new h.default(k.default.map(function(a) {
                    return a.cloneWithPrefixedClauses(l)
                }))
            }), a.exports = b.default
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        b.__esModule = !0, b.NormalizeGermanSharpSRule = b.ParenthesesRule = b.RemovePunctuationRule = b.ReorderRule = void 0;
        var e = c(16),
            f = d(e),
            g = c(7),
            h = d(g),
            i = c(17),
            j = c(18),
            k = c(6),
            l = new f.default("Core grading rule")
            .withClause((new h.default)
                .withCondition(function() {
                    return i.isSentence.apply(void 0, arguments) && !i.isCaseSensitive.apply(void 0, arguments)
                })
                .withTransform(j.convertToSentenceCase))
            .withClause((new h.default)
                .withCondition(function() {
                    return !i.isSentence.apply(void 0, arguments) && !i.isCaseSensitive.apply(void 0, arguments)
                })
                .withTransform(j.convertToLowerCase))
            .withClause((new h.default)
                .withCondition(function() {
                    return !i.isScientific.apply(void 0, arguments)
                })
                .withTransform([j.normalizePlusAndAmpersand, j.removeTrailingDashes, j.removeParensAndContents]))
            .withClause((new h.default)
                .withCondition(i.isPinyin)
                .withTransform(j.convertPinyin)),
            m = b.ReorderRule = new f.default("Reorder if items look like they are in a list")
            .withClauses(l.getClauses())
            .withClause((new h.default)
                .withCondition(i.shouldReorder)
                .withTransform(j.reorderOnSplitChars))
            .withClause((new h.default)
                .withTransform(j.postProcess)),
            n = b.RemovePunctuationRule = new f.default("Remove punctuation and parentheses")
            .withClauses(l.getClauses())
            .withClause((new h.default)
                .withTransform(j.removePunctuation))
            .withClause((new h.default)
                .withCondition(function() {
                    return !i.isScientific.apply(void 0, arguments)
                })
                .withTransform(j.removeParens))
            .withClause((new h.default)
                .withCondition(i.isWhitespaceInsensitive)
                .withTransform(j.removeWhitespace))
            .withClause((new h.default)
                .withTransform(j.postProcess)),
            o = b.ParenthesesRule = new f.default("Catch all for parentheses - ignore parens themselves, but keep contents")
            .withClause((new h.default)
                .withCondition(function() {
                    return i.isSentence.apply(void 0, arguments) && !i.isCaseSensitive.apply(void 0, arguments)
                })
                .withTransform(j.convertToSentenceCase))
            .withClause((new h.default)
                .withCondition(function() {
                    return !i.isSentence.apply(void 0, arguments) && !i.isCaseSensitive.apply(void 0, arguments)
                })
                .withTransform(j.convertToLowerCase))
            .withClause((new h.default)
                .withCondition(function() {
                    return !i.isScientific.apply(void 0, arguments) && i.containsParens.apply(void 0, arguments)
                })
                .withTransform(j.removeParens)),
            p = b.NormalizeGermanSharpSRule = new f.default('Normalize German sharp s - "ß" -> "ss"')
            .withClause(k.NormalizeSharpSInAnswerForGerman);
        b.default = [m, n, o, p]
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        b.__esModule = !0;
        var e = c(1),
            f = d(e),
            g = function() {
                function a() {
                    (0, f.default)(this, a), this.factoryMethod = null
                }
                return a.prototype.withFactoryMethod = function(a) {
                    return this.factoryMethod = a, this
                }, a.prototype.create = function() {
                    return this.factoryMethod()
                }, a
            }();
        b.default = g, a.exports = b.default
    }, function(a, b) {
        "use strict";

        function c(a) {
            return null === a || void 0 === a ? "" : ("" + a)
                .replace(d, "")
        }
        b.__esModule = !0, b.default = c;
        var d = /^[\s\uFEFF\xA0\u3000]+|[\s\uFEFF\xA0\u3000]+$/g;
        a.exports = b.default
    }, function(a, b, c) {
        a.exports = {
            default: c(24),
            __esModule: !0
        }
    }, function(a, b, c) {
        c(50), a.exports = c(10)
            .Object.assign
    }, function(a, b) {
        a.exports = function(a) {
            if ("function" != typeof a) throw TypeError(a + " is not a function!");
            return a
        }
    }, function(a, b, c) {
        var d = c(5);
        a.exports = function(a) {
            if (!d(a)) throw TypeError(a + " is not an object!");
            return a
        }
    }, function(a, b, c) {
        var d = c(14),
            e = c(46),
            f = c(45);
        a.exports = function(a) {
            return function(b, c, g) {
                var h, i = d(b),
                    j = e(i.length),
                    k = f(g, j);
                if (a && c != c) {
                    for (; j > k;)
                        if (h = i[k++], h != h) return !0
                } else
                    for (; j > k; k++)
                        if ((a || k in i) && i[k] === c) return a || k || 0;
                return !a && -1
            }
        }
    }, function(a, b) {
        var c = {}.toString;
        a.exports = function(a) {
            return c.call(a)
                .slice(8, -1)
        }
    }, function(a, b, c) {
        var d = c(25);
        a.exports = function(a, b, c) {
            if (d(a), void 0 === b) return a;
            switch (c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
    }, function(a, b, c) {
        var d = c(5),
            e = c(4)
            .document,
            f = d(e) && d(e.createElement);
        a.exports = function(a) {
            return f ? e.createElement(a) : {}
        }
    }, function(a, b) {
        a.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(a, b, c) {
        var d = c(4),
            e = c(10),
            f = c(29),
            g = c(34),
            h = "prototype",
            i = function(a, b, c) {
                var j, k, l, m = a & i.F,
                    n = a & i.G,
                    o = a & i.S,
                    p = a & i.P,
                    q = a & i.B,
                    r = a & i.W,
                    s = n ? e : e[b] || (e[b] = {}),
                    t = s[h],
                    u = n ? d : o ? d[b] : (d[b] || {})[h];
                n && (c = b);
                for (j in c) k = !m && u && void 0 !== u[j], k && j in s || (l = k ? u[j] : c[j], s[j] = n && "function" != typeof u[j] ? c[j] : q && k ? f(l, d) : r && u[j] == l ? function(a) {
                    var b = function(b, c, d) {
                        if (this instanceof a) {
                            switch (arguments.length) {
                                case 0:
                                    return new a;
                                case 1:
                                    return new a(b);
                                case 2:
                                    return new a(b, c)
                            }
                            return new a(b, c, d)
                        }
                        return a.apply(this, arguments)
                    };
                    return b[h] = a[h], b
                }(l) : p && "function" == typeof l ? f(Function.call, l) : l, p && ((s.virtual || (s.virtual = {}))[j] = l, a & i.R && t && !t[j] && g(t, j, l)))
            };
        i.F = 1, i.G = 2, i.S = 4, i.P = 8, i.B = 16, i.W = 32, i.U = 64, i.R = 128, a.exports = i
    }, function(a, b) {
        var c = {}.hasOwnProperty;
        a.exports = function(a, b) {
            return c.call(a, b)
        }
    }, function(a, b, c) {
        var d = c(37),
            e = c(42);
        a.exports = c(2) ? function(a, b, c) {
            return d.f(a, b, e(1, c))
        } : function(a, b, c) {
            return a[b] = c, a
        }
    }, function(a, b, c) {
        a.exports = !c(2) && !c(3)(function() {
            return 7 != Object.defineProperty(c(30)("div"), "a", {
                    get: function() {
                        return 7
                    }
                })
                .a
        })
    }, function(a, b, c) {
        "use strict";
        var d = c(40),
            e = c(38),
            f = c(41),
            g = c(47),
            h = c(12),
            i = Object.assign;
        a.exports = !i || c(3)(function() {
            var a = {},
                b = {},
                c = Symbol(),
                d = "abcdefghijklmnopqrst";
            return a[c] = 7, d.split("")
                .forEach(function(a) {
                    b[a] = a
                }), 7 != i({}, a)[c] || Object.keys(i({}, b))
                .join("") != d
        }) ? function(a, b) {
            for (var c = g(a), i = arguments.length, j = 1, k = e.f, l = f.f; i > j;)
                for (var m, n = h(arguments[j++]), o = k ? d(n)
                        .concat(k(n)) : d(n), p = o.length, q = 0; p > q;) l.call(n, m = o[q++]) && (c[m] = n[m]);
            return c
        } : i
    }, function(a, b, c) {
        var d = c(26),
            e = c(35),
            f = c(48),
            g = Object.defineProperty;
        b.f = c(2) ? Object.defineProperty : function(a, b, c) {
            if (d(a), b = f(b, !0), d(c), e) try {
                return g(a, b, c)
            } catch (a) {}
            if ("get" in c || "set" in c) throw TypeError("Accessors not supported!");
            return "value" in c && (a[b] = c.value), a
        }
    }, function(a, b) {
        b.f = Object.getOwnPropertySymbols
    }, function(a, b, c) {
        var d = c(33),
            e = c(14),
            f = c(27)(!1),
            g = c(43)("IE_PROTO");
        a.exports = function(a, b) {
            var c, h = e(a),
                i = 0,
                j = [];
            for (c in h) c != g && d(h, c) && j.push(c);
            for (; b.length > i;) d(h, c = b[i++]) && (~f(j, c) || j.push(c));
            return j
        }
    }, function(a, b, c) {
        var d = c(39),
            e = c(31);
        a.exports = Object.keys || function(a) {
            return d(a, e)
        }
    }, function(a, b) {
        b.f = {}.propertyIsEnumerable
    }, function(a, b) {
        a.exports = function(a, b) {
            return {
                enumerable: !(1 & a),
                configurable: !(2 & a),
                writable: !(4 & a),
                value: b
            }
        }
    }, function(a, b, c) {
        var d = c(44)("keys"),
            e = c(49);
        a.exports = function(a) {
            return d[a] || (d[a] = e(a))
        }
    }, function(a, b, c) {
        var d = c(4),
            e = "__core-js_shared__",
            f = d[e] || (d[e] = {});
        a.exports = function(a) {
            return f[a] || (f[a] = {})
        }
    }, function(a, b, c) {
        var d = c(13),
            e = Math.max,
            f = Math.min;
        a.exports = function(a, b) {
            return a = d(a), a < 0 ? e(a + b, 0) : f(a, b)
        }
    }, function(a, b, c) {
        var d = c(13),
            e = Math.min;
        a.exports = function(a) {
            return a > 0 ? e(d(a), 9007199254740991) : 0
        }
    }, function(a, b, c) {
        var d = c(11);
        a.exports = function(a) {
            return Object(d(a))
        }
    }, function(a, b, c) {
        var d = c(5);
        a.exports = function(a, b) {
            if (!d(a)) return a;
            var c, e;
            if (b && "function" == typeof(c = a.toString) && !d(e = c.call(a))) return e;
            if ("function" == typeof(c = a.valueOf) && !d(e = c.call(a))) return e;
            if (!b && "function" == typeof(c = a.toString) && !d(e = c.call(a))) return e;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(a, b) {
        var c = 0,
            d = Math.random();
        a.exports = function(a) {
            return "Symbol(".concat(void 0 === a ? "" : a, ")_", (++c + d)
                .toString(36))
        }
    }, function(a, b, c) {
        var d = c(32);
        d(d.S + d.F, "Object", {
            assign: c(36)
        })
    }, function(a, b) {
        a.exports = {
            allLanguages: {
                af: "Afrikaans",
                ak: "Akan",
                akk: "Akkadian",
                sq: "Albanian",
                ase: "American Sign Language",
                am: "Amharic",
                ang: "Anglo-Saxon",
                ar: "Arabic",
                hy: "Armenian",
                az: "Azerbaijani",
                eu: "Basque",
                be: "Belarusian",
                bn: "Bengali",
                bh: "Bihari",
                bs: "Bosnian",
                bg: "Bulgarian",
                br: "Breton",
                my: "Burmese",
                ca: "Catalan",
                ceb: "Cebuano",
                ch: "Chamorro",
                chem: "Chemistry",
                chr: "Cherokee",
                "zh-CN": "Chinese (Simplified)",
                "zh-pi": "Chinese (Pinyin)",
                "zh-TW": "Chinese (Traditional)",
                co: "Corsican",
                cho: "Choctaw",
                cop: "Coptic",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                den: "Dene",
                dv: "Dhivehi",
                luo: "Dholuo",
                nl: "Dutch",
                en: "English",
                eo: "Esperanto",
                et: "Estonian",
                fo: "Faroese",
                fi: "Finnish",
                dyo: "Jola-Fonyi",
                fr: "French",
                ff: "Fula",
                gd: "Gaelic",
                gl: "Galician",
                ka: "Georgian",
                de: "German",
                got: "Gothic",
                el: "Greek",
                gn: "Guarani",
                gu: "Gujarati",
                hai: "Haida",
                ht: "Haitian Creole",
                ha: "Hausa",
                haw: "Hawaiian",
                iw: "Hebrew",
                hi: "Hindi",
                hmv: "Hmong",
                hu: "Hungarian",
                is: "Icelandic",
                ig: "Igbo",
                hil: "Ilonggo",
                id: "Indonesian",
                ipa: "International Phonetic Alphabet (IPA)",
                iu: "Inuktitut",
                ga: "Irish",
                it: "Italian",
                ja: "Japanese",
                "ja-ro": "Japanese (Romaji)",
                "ja-ka": "Japanese (Kana)",
                jv: "Javanese",
                kg: "KiKongo",
                kin: "Kinyarwanda",
                kio: "Kiowa",
                kn: "Kannada",
                kk: "Kazakh",
                km: "Khmer",
                mjd: "Konkow",
                ko: "Korean",
                ksw: "Sgaw Karen",
                ku: "Kurdish",
                ky: "Kyrgyz",
                lkt: "Lakota",
                lo: "Lao",
                la: "Latin",
                lv: "Latvian",
                unm: "Lenape",
                ln: "Lingala",
                lt: "Lithuanian",
                lua: "Luba-Kasai",
                lb: "Luxembourgish",
                mk: "Macedonian",
                ms: "Malay",
                mg: "Malagasy",
                ml: "Malayalam",
                mt: "Maltese",
                mnk: "Mandinka",
                mi: "Maori",
                rar: "Maori (Cook Islands)",
                mr: "Marathi",
                mh: "Marshallese",
                math: "Math / Symbols",
                moh: "Mohawk",
                mn: "Mongolian",
                nah: "Nahuatl",
                nv: "Navajo",
                ne: "Nepali",
                no: "Norwegian",
                oc: "Occitan",
                or: "Oriya",
                om: "Oromo",
                oj: "Ojibwe",
                pi: "Pāli",
                ps: "Pashto",
                fa: "Persian",
                photo: "Photos",
                fil: "Filipino",
                pl: "Polish",
                pt: "Portuguese",
                pa: "Punjabi",
                qu: "Quechua",
                ro: "Romanian",
                rm: "Romansh",
                ru: "Russian",
                sm: "Samoan",
                sa: "Sanskrit",
                see: "Seneca",
                sr: "Serbian",
                shn: "Shan",
                sd: "Sindhi",
                si: "Sinhalese",
                sk: "Slovak",
                sl: "Slovenian",
                so: "Somali",
                es: "Spanish",
                su: "Sundanese",
                sw: "Swahili",
                sv: "Swedish",
                syc: "Syriac",
                tl: "Tagalog",
                tg: "Tajik",
                ta: "Tamil",
                tt: "Tatar",
                te: "Telugu",
                tet: "Tetum",
                th: "Thai",
                bo: "Tibetan",
                ti: "Tigrinya",
                to: "Tonga",
                ood: "Tohono O'odham",
                trc: "Triki",
                tr: "Turkish",
                tyv: "Tuvan",
                uk: "Ukrainian",
                ur: "Urdu",
                uz: "Uzbek",
                ug: "Uighur",
                vi: "Vietnamese",
                cy: "Welsh",
                fy: "Western Frisian",
                win: "Winnebago",
                wo: "Wolof",
                xh: "Xhosa",
                yi: "Yiddish",
                yo: "Yoruba",
                zu: "Zulu",
                "??": "Other / Unknown"
            },
            customLanguages: ["zh-pi", "ja-ka", "ja-ro", "ase", "chem", "math", "photo", "??"],
            invisibleLanguages: ["photo", "ja-ka"],
            frequentLanguages: ["en", "es", "fr", "it", "de", "ru", "ja", "ja-ro", "zh-CN", "zh-TW", "zh-pi", "ko", "math", "chem", "la"],
            ttsLanguages: ["pt", "fr", "it", "de", "nl", "sv", "fi", "pl", "el", "tr", "ru", "ar", "ro", "en", "es", "ja", "ko", "zh-CN", "zh-TW", "zh-pi"],
            rightToLeftLanguages: ["ar", "dv", "fa", "iw", "ku", "ps", "sd", "ug", "ur", "yi"],
            caseSensitiveLanguages: ["de", "chem", "math"],
            symbolicLanguages: ["chem", "math", "photo"],
            chineseLanguages: ["zh-CN", "zh-TW", "zh-pi"],
            hardLanguages: ["zh-CN", "zh-TW", "ja", "ko"]
        }
    }, function(a, b, c) {
        var d, e;
        (function() {
            var f;
            f = {
                    pinyinRegex: /(shuang|chuang|zhuang|xiang|qiong|shuai|niang|guang|sheng|kuang|shang|jiong|huang|jiang|shuan|xiong|zhang|zheng|zhong|zhuai|zhuan|qiang|chang|liang|chuan|cheng|chong|chuai|hang|peng|chuo|piao|pian|chua|ping|yang|pang|chui|chun|chen|chan|chou|chao|chai|zhun|mang|meng|weng|shai|shei|miao|zhui|mian|yong|ming|wang|zhuo|zhua|shao|yuan|bing|zhen|fang|feng|zhan|zhou|zhao|zhei|zhai|rang|suan|reng|song|seng|dang|deng|dong|xuan|sang|rong|duan|cuan|cong|ceng|cang|diao|ruan|dian|ding|shou|xing|zuan|jiao|zong|zeng|zang|jian|tang|teng|tong|bian|biao|shan|tuan|huan|xian|huai|tiao|tian|hong|xiao|heng|ying|jing|shen|beng|kuan|kuai|nang|neng|nong|juan|kong|nuan|keng|kang|shua|niao|guan|nian|ting|shuo|guai|ning|quan|qiao|shui|gong|geng|gang|qian|bang|lang|leng|long|qing|ling|luan|shun|lian|liao|zhi|lia|liu|qin|lun|lin|luo|lan|lou|qiu|gai|gei|gao|gou|gan|gen|lao|lei|lai|que|gua|guo|nin|gui|niu|nie|gun|qie|qia|jun|kai|kei|kao|kou|kan|ken|qun|nun|nuo|xia|kua|kuo|nen|kui|nan|nou|kun|jue|nao|nei|hai|hei|hao|hou|han|hen|nai|rou|xiu|jin|hua|huo|tie|hui|tun|tui|hun|tuo|tan|jiu|zai|zei|zao|zou|zan|zen|eng|tou|tao|tei|tai|zuo|zui|xin|zun|jie|jia|run|diu|cai|cao|cou|can|cen|die|dia|xue|rui|cuo|cui|dun|cun|cin|ruo|rua|dui|sai|sao|sou|san|sen|duo|den|dan|dou|suo|sui|dao|sun|dei|zha|zhe|dai|xun|ang|ong|wai|fen|fan|fou|fei|zhu|wei|wan|min|miu|mie|wen|men|lie|chi|cha|che|man|mou|mao|mei|mai|yao|you|yan|chu|pin|pie|yin|pen|pan|pou|pao|shi|sha|she|pei|pai|yue|bin|bie|yun|nüe|lve|shu|ben|ban|bao|bei|bai|lüe|nve|ren|ran|rao|xie|re|ri|si|su|se|ru|sa|cu|ce|ca|ji|ci|zi|zu|ze|za|hu|he|ha|ju|ku|ke|qi|ka|gu|ge|ga|li|lu|le|qu|la|ni|xi|nu|ne|na|ti|tu|te|ta|xu|di|du|de|bo|lv|ba|ai|ei|ao|ou|an|en|er|da|wu|wa|wo|fu|fo|fa|nv|mi|mu|yi|ya|ye|me|mo|ma|pi|pu|po|yu|pa|bi|nü|bu|lü|e|o|a)r?[1-5]/gi,
                    vowels: {
                        "a*": "0",
                        "e*": "1",
                        "i*": "2",
                        "o*": "3",
                        "u*": "4",
                        "ü*": "5",
                        "A*": "6",
                        "E*": "7",
                        "I*": "8",
                        "O*": "9",
                        "U*": "10",
                        "Ü*": "11"
                    },
                    pinyin: {
                        1: ["ā", "ē", "ī", "ō", "ū", "ǖ", "Ā", "Ē", "Ī", "Ō", "Ū", "Ǖ"],
                        2: ["á", "é", "í", "ó", "ú", "ǘ", "Á", "É", "Í", "Ó", "Ú", "Ǘ"],
                        3: ["ǎ", "ě", "ǐ", "ǒ", "ǔ", "ǚ", "Ǎ", "Ě", "Ǐ", "Ǒ", "Ǔ", "Ǚ"],
                        4: ["à", "è", "ì", "ò", "ù", "ǜ", "À", "È", "Ì", "Ò", "Ù", "Ǜ"],
                        5: ["a", "e", "i", "o", "u", "ü", "A", "E", "I", "O", "U", "Ü"]
                    },
                    convert: function(a) {
                        var b, c, d, e, f;
                        if (e = a.match(this.pinyinRegex), !e) return a;
                        for (b = 0, c = e.length; b < c; b++) d = e[b], f = this.getReplacement(d), a = a.replace(d, f);
                        return a
                    },
                    getReplacement: function(a) {
                        var b, c, d, e, f, g, h, i, j;
                        b = this.getAccentMap(), f = a.slice(-1), j = a.slice(0, -1)
                            .replace("v", "ü")
                            .replace("V", "Ü");
                        for (d in b)
                            if (g = b[d], j.indexOf(d) >= 0) return h = g.match(/.\*/)[0], i = this.vowels[h], c = this.pinyin[f.toString()][i], e = j.replace(d, g)
                                .replace(h, c);
                        return a
                    },
                    getAccentMap: function() {
                        var a, b, c, d, e, f, g, h;
                        if (!this.accentMap)
                            for (g = "a*i a*o e*i ia* ia*o ie* io* iu* A*I A*O E*I IA* IA*O IE* IO* IU* o*u ua* ua*i ue* ui* uo* üe* O*U UA* UA*I UE* UI* UO* ÜE* A* E* I* O* U* Ü* a* e* i* o* u* ü*", e = g.replace(/\*/g, ""), h = g.split(" "), this.accentMap = {}, f = e.split(" "), b = c = 0, d = f.length; c < d; b = ++c) a = f[b], this.accentMap[a] = h[b];
                        return this.accentMap
                    }
                },
                function(f, g) {
                    return d = g, e = "function" == typeof d ? d.call(b, c, b, a) : d, !(void 0 !== e && (a.exports = e))
                }(this, function() {
                    return f
                })
        })
        .call(this)
    }])
});
