// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
RussianStemmer = function() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["\u0432", -1, 1],
        ["\u0438\u0432", 0, 2],
        ["\u044B\u0432", 0, 2],
        ["\u0432\u0448\u0438", -1, 1],
        ["\u0438\u0432\u0448\u0438", 3, 2],
        ["\u044B\u0432\u0448\u0438", 3, 2],
        ["\u0432\u0448\u0438\u0441\u044C", -1, 1],
        ["\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2],
        ["\u044B\u0432\u0448\u0438\u0441\u044C", 6, 2]
    ];

    /** @const */ var a_1 = [
        ["\u0435\u0435", -1, 1],
        ["\u0438\u0435", -1, 1],
        ["\u043E\u0435", -1, 1],
        ["\u044B\u0435", -1, 1],
        ["\u0438\u043C\u0438", -1, 1],
        ["\u044B\u043C\u0438", -1, 1],
        ["\u0435\u0439", -1, 1],
        ["\u0438\u0439", -1, 1],
        ["\u043E\u0439", -1, 1],
        ["\u044B\u0439", -1, 1],
        ["\u0435\u043C", -1, 1],
        ["\u0438\u043C", -1, 1],
        ["\u043E\u043C", -1, 1],
        ["\u044B\u043C", -1, 1],
        ["\u0435\u0433\u043E", -1, 1],
        ["\u043E\u0433\u043E", -1, 1],
        ["\u0435\u043C\u0443", -1, 1],
        ["\u043E\u043C\u0443", -1, 1],
        ["\u0438\u0445", -1, 1],
        ["\u044B\u0445", -1, 1],
        ["\u0435\u044E", -1, 1],
        ["\u043E\u044E", -1, 1],
        ["\u0443\u044E", -1, 1],
        ["\u044E\u044E", -1, 1],
        ["\u0430\u044F", -1, 1],
        ["\u044F\u044F", -1, 1]
    ];

    /** @const */ var a_2 = [
        ["\u0435\u043C", -1, 1],
        ["\u043D\u043D", -1, 1],
        ["\u0432\u0448", -1, 1],
        ["\u0438\u0432\u0448", 2, 2],
        ["\u044B\u0432\u0448", 2, 2],
        ["\u0449", -1, 1],
        ["\u044E\u0449", 5, 1],
        ["\u0443\u044E\u0449", 6, 2]
    ];

    /** @const */ var a_3 = [
        ["\u0441\u044C", -1, 1],
        ["\u0441\u044F", -1, 1]
    ];

    /** @const */ var a_4 = [
        ["\u043B\u0430", -1, 1],
        ["\u0438\u043B\u0430", 0, 2],
        ["\u044B\u043B\u0430", 0, 2],
        ["\u043D\u0430", -1, 1],
        ["\u0435\u043D\u0430", 3, 2],
        ["\u0435\u0442\u0435", -1, 1],
        ["\u0438\u0442\u0435", -1, 2],
        ["\u0439\u0442\u0435", -1, 1],
        ["\u0435\u0439\u0442\u0435", 7, 2],
        ["\u0443\u0439\u0442\u0435", 7, 2],
        ["\u043B\u0438", -1, 1],
        ["\u0438\u043B\u0438", 10, 2],
        ["\u044B\u043B\u0438", 10, 2],
        ["\u0439", -1, 1],
        ["\u0435\u0439", 13, 2],
        ["\u0443\u0439", 13, 2],
        ["\u043B", -1, 1],
        ["\u0438\u043B", 16, 2],
        ["\u044B\u043B", 16, 2],
        ["\u0435\u043C", -1, 1],
        ["\u0438\u043C", -1, 2],
        ["\u044B\u043C", -1, 2],
        ["\u043D", -1, 1],
        ["\u0435\u043D", 22, 2],
        ["\u043B\u043E", -1, 1],
        ["\u0438\u043B\u043E", 24, 2],
        ["\u044B\u043B\u043E", 24, 2],
        ["\u043D\u043E", -1, 1],
        ["\u0435\u043D\u043E", 27, 2],
        ["\u043D\u043D\u043E", 27, 1],
        ["\u0435\u0442", -1, 1],
        ["\u0443\u0435\u0442", 30, 2],
        ["\u0438\u0442", -1, 2],
        ["\u044B\u0442", -1, 2],
        ["\u044E\u0442", -1, 1],
        ["\u0443\u044E\u0442", 34, 2],
        ["\u044F\u0442", -1, 2],
        ["\u043D\u044B", -1, 1],
        ["\u0435\u043D\u044B", 37, 2],
        ["\u0442\u044C", -1, 1],
        ["\u0438\u0442\u044C", 39, 2],
        ["\u044B\u0442\u044C", 39, 2],
        ["\u0435\u0448\u044C", -1, 1],
        ["\u0438\u0448\u044C", -1, 2],
        ["\u044E", -1, 2],
        ["\u0443\u044E", 44, 2]
    ];

    /** @const */ var a_5 = [
        ["\u0430", -1, 1],
        ["\u0435\u0432", -1, 1],
        ["\u043E\u0432", -1, 1],
        ["\u0435", -1, 1],
        ["\u0438\u0435", 3, 1],
        ["\u044C\u0435", 3, 1],
        ["\u0438", -1, 1],
        ["\u0435\u0438", 6, 1],
        ["\u0438\u0438", 6, 1],
        ["\u0430\u043C\u0438", 6, 1],
        ["\u044F\u043C\u0438", 6, 1],
        ["\u0438\u044F\u043C\u0438", 10, 1],
        ["\u0439", -1, 1],
        ["\u0435\u0439", 12, 1],
        ["\u0438\u0435\u0439", 13, 1],
        ["\u0438\u0439", 12, 1],
        ["\u043E\u0439", 12, 1],
        ["\u0430\u043C", -1, 1],
        ["\u0435\u043C", -1, 1],
        ["\u0438\u0435\u043C", 18, 1],
        ["\u043E\u043C", -1, 1],
        ["\u044F\u043C", -1, 1],
        ["\u0438\u044F\u043C", 21, 1],
        ["\u043E", -1, 1],
        ["\u0443", -1, 1],
        ["\u0430\u0445", -1, 1],
        ["\u044F\u0445", -1, 1],
        ["\u0438\u044F\u0445", 26, 1],
        ["\u044B", -1, 1],
        ["\u044C", -1, 1],
        ["\u044E", -1, 1],
        ["\u0438\u044E", 30, 1],
        ["\u044C\u044E", 30, 1],
        ["\u044F", -1, 1],
        ["\u0438\u044F", 33, 1],
        ["\u044C\u044F", 33, 1]
    ];

    /** @const */ var a_6 = [
        ["\u043E\u0441\u0442", -1, 1],
        ["\u043E\u0441\u0442\u044C", -1, 1]
    ];

    /** @const */ var a_7 = [
        ["\u0435\u0439\u0448\u0435", -1, 1],
        ["\u043D", -1, 2],
        ["\u0435\u0439\u0448", -1, 1],
        ["\u044C", -1, 3]
    ];

    /** @const */ var /** Array<int> */ g_v = [33, 65, 8, 232];

    var /** number */ I_p2 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 59
        I_pV = base.limit;
        I_p2 = base.limit;
        // do, line 63
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 63
            // gopast, line 64
            golab1: while(true)
            {
                lab2: {
                    if (!(base.in_grouping(g_v, 1072, 1103)))
                    {
                        break lab2;
                    }
                    break golab1;
                }
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
            }
            // setmark pV, line 64
            I_pV = base.cursor;
            // gopast, line 64
            golab3: while(true)
            {
                lab4: {
                    if (!(base.out_grouping(g_v, 1072, 1103)))
                    {
                        break lab4;
                    }
                    break golab3;
                }
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
            }
            // gopast, line 65
            golab5: while(true)
            {
                lab6: {
                    if (!(base.in_grouping(g_v, 1072, 1103)))
                    {
                        break lab6;
                    }
                    break golab5;
                }
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
            }
            // gopast, line 65
            golab7: while(true)
            {
                lab8: {
                    if (!(base.out_grouping(g_v, 1072, 1103)))
                    {
                        break lab8;
                    }
                    break golab7;
                }
                if (base.cursor >= base.limit)
                {
                    break lab0;
                }
                base.cursor++;
            }
            // setmark p2, line 65
            I_p2 = base.cursor;
        }
        base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    function r_R2() {
        if (!(I_p2 <= base.cursor))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_perfective_gerund() {
        var /** number */ among_var;
        // (, line 73
        // [, line 74
        base.ket = base.cursor;
        // substring, line 74
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 74
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                // (, line 78
                // or, line 78
                lab0: {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        // literal, line 78
                        if (!(base.eq_s_b("\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    // literal, line 78
                    if (!(base.eq_s_b("\u044F")))
                    {
                        return false;
                    }
                }
                // delete, line 78
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 85
                // delete, line 85
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_adjective() {
        // (, line 89
        // [, line 90
        base.ket = base.cursor;
        // substring, line 90
        if (base.find_among_b(a_1) == 0)
        {
            return false;
        }
        // ], line 90
        base.bra = base.cursor;
        // (, line 99
        // delete, line 99
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_adjectival() {
        var /** number */ among_var;
        // (, line 103
        // call adjective, line 104
        if (!r_adjective())
        {
            return false;
        }
        // try, line 111
        var /** number */ v_1 = base.limit - base.cursor;
        lab0: {
            // (, line 111
            // [, line 112
            base.ket = base.cursor;
            // substring, line 112
            among_var = base.find_among_b(a_2);
            if (among_var == 0)
            {
                base.cursor = base.limit - v_1;
                break lab0;
            }
            // ], line 112
            base.bra = base.cursor;
            switch (among_var) {
                case 1:
                    // (, line 117
                    // or, line 117
                    lab1: {
                        var /** number */ v_2 = base.limit - base.cursor;
                        lab2: {
                            // literal, line 117
                            if (!(base.eq_s_b("\u0430")))
                            {
                                break lab2;
                            }
                            break lab1;
                        }
                        base.cursor = base.limit - v_2;
                        // literal, line 117
                        if (!(base.eq_s_b("\u044F")))
                        {
                            base.cursor = base.limit - v_1;
                            break lab0;
                        }
                    }
                    // delete, line 117
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 124
                    // delete, line 124
                    if (!base.slice_del())
                    {
                        return false;
                    }
                    break;
            }
        }
        return true;
    };

    /** @return {boolean} */
    function r_reflexive() {
        // (, line 130
        // [, line 131
        base.ket = base.cursor;
        // substring, line 131
        if (base.find_among_b(a_3) == 0)
        {
            return false;
        }
        // ], line 131
        base.bra = base.cursor;
        // (, line 134
        // delete, line 134
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_verb() {
        var /** number */ among_var;
        // (, line 138
        // [, line 139
        base.ket = base.cursor;
        // substring, line 139
        among_var = base.find_among_b(a_4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 139
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                // (, line 145
                // or, line 145
                lab0: {
                    var /** number */ v_1 = base.limit - base.cursor;
                    lab1: {
                        // literal, line 145
                        if (!(base.eq_s_b("\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    base.cursor = base.limit - v_1;
                    // literal, line 145
                    if (!(base.eq_s_b("\u044F")))
                    {
                        return false;
                    }
                }
                // delete, line 145
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 153
                // delete, line 153
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_noun() {
        // (, line 161
        // [, line 162
        base.ket = base.cursor;
        // substring, line 162
        if (base.find_among_b(a_5) == 0)
        {
            return false;
        }
        // ], line 162
        base.bra = base.cursor;
        // (, line 169
        // delete, line 169
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_derivational() {
        // (, line 177
        // [, line 178
        base.ket = base.cursor;
        // substring, line 178
        if (base.find_among_b(a_6) == 0)
        {
            return false;
        }
        // ], line 178
        base.bra = base.cursor;
        // call R2, line 178
        if (!r_R2())
        {
            return false;
        }
        // (, line 181
        // delete, line 181
        if (!base.slice_del())
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_tidy_up() {
        var /** number */ among_var;
        // (, line 185
        // [, line 186
        base.ket = base.cursor;
        // substring, line 186
        among_var = base.find_among_b(a_7);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 186
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                // (, line 190
                // delete, line 190
                if (!base.slice_del())
                {
                    return false;
                }
                // [, line 191
                base.ket = base.cursor;
                // literal, line 191
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                // ], line 191
                base.bra = base.cursor;
                // literal, line 191
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                // delete, line 191
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 194
                // literal, line 194
                if (!(base.eq_s_b("\u043D")))
                {
                    return false;
                }
                // delete, line 194
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 196
                // delete, line 196
                if (!base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 201
        // do, line 205
        var /** number */ v_1 = base.cursor;
        lab0: {
            // repeat, line 205
            replab1: while(true)
            {
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // (, line 205
                    // goto, line 205
                    golab3: while(true)
                    {
                        var /** number */ v_3 = base.cursor;
                        lab4: {
                            // (, line 205
                            // [, line 205
                            base.bra = base.cursor;
                            // literal, line 205
                            if (!(base.eq_s("\u0451")))
                            {
                                break lab4;
                            }
                            // ], line 205
                            base.ket = base.cursor;
                            base.cursor = v_3;
                            break golab3;
                        }
                        base.cursor = v_3;
                        if (base.cursor >= base.limit)
                        {
                            break lab2;
                        }
                        base.cursor++;
                    }
                    // <-, line 205
                    if (!base.slice_from("\u0435"))
                    {
                        return false;
                    }
                    continue replab1;
                }
                base.cursor = v_2;
                break replab1;
            }
        }
        base.cursor = v_1;
        // do, line 207
        lab5: {
            // call mark_regions, line 207
            if (!r_mark_regions())
            {
                break lab5;
            }
        }
        // backwards, line 208
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // setlimit, line 208
        var /** number */ v_5 = base.limit - base.cursor;
        // tomark, line 208
        if (base.cursor < I_pV)
        {
            return false;
        }
        base.cursor = I_pV;
        var /** number */ v_6 = base.limit_backward;
        base.limit_backward = base.cursor;
        base.cursor = base.limit - v_5;
        // (, line 208
        // do, line 209
        var /** number */ v_7 = base.limit - base.cursor;
        lab6: {
            // (, line 209
            // or, line 210
            lab7: {
                var /** number */ v_8 = base.limit - base.cursor;
                lab8: {
                    // call perfective_gerund, line 210
                    if (!r_perfective_gerund())
                    {
                        break lab8;
                    }
                    break lab7;
                }
                base.cursor = base.limit - v_8;
                // (, line 211
                // try, line 211
                var /** number */ v_9 = base.limit - base.cursor;
                lab9: {
                    // call reflexive, line 211
                    if (!r_reflexive())
                    {
                        base.cursor = base.limit - v_9;
                        break lab9;
                    }
                }
                // or, line 212
                lab10: {
                    var /** number */ v_10 = base.limit - base.cursor;
                    lab11: {
                        // call adjectival, line 212
                        if (!r_adjectival())
                        {
                            break lab11;
                        }
                        break lab10;
                    }
                    base.cursor = base.limit - v_10;
                    lab12: {
                        // call verb, line 212
                        if (!r_verb())
                        {
                            break lab12;
                        }
                        break lab10;
                    }
                    base.cursor = base.limit - v_10;
                    // call noun, line 212
                    if (!r_noun())
                    {
                        break lab6;
                    }
                }
            }
        }
        base.cursor = base.limit - v_7;
        // try, line 215
        var /** number */ v_11 = base.limit - base.cursor;
        lab13: {
            // (, line 215
            // [, line 215
            base.ket = base.cursor;
            // literal, line 215
            if (!(base.eq_s_b("\u0438")))
            {
                base.cursor = base.limit - v_11;
                break lab13;
            }
            // ], line 215
            base.bra = base.cursor;
            // delete, line 215
            if (!base.slice_del())
            {
                return false;
            }
        }
        // do, line 218
        var /** number */ v_12 = base.limit - base.cursor;
        lab14: {
            // call derivational, line 218
            if (!r_derivational())
            {
                break lab14;
            }
        }
        base.cursor = base.limit - v_12;
        // do, line 219
        var /** number */ v_13 = base.limit - base.cursor;
        lab15: {
            // call tidy_up, line 219
            if (!r_tidy_up())
            {
                break lab15;
            }
        }
        base.cursor = base.limit - v_13;
        base.limit_backward = v_6;
        base.cursor = base.limit_backward;
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
