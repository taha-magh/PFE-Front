import { HttpParams } from '@angular/common/http';
export var createRequestOption = function (req) {
    var options = new HttpParams();
    if (req) {
        Object.keys(req).forEach(function (key) {
            if (key !== 'sort') {
                if (key == 'criteria') {
                    if (req.criteria && req.criteria.length > 0) {
                        req.criteria.forEach(function (criterion) {
                            options = options.set(criterion.key, criterion.value);
                        });
                    }
                }
                else {
                    options = options.set(key, req[key]);
                }
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};
export var createRequestOptionForTribPerms = function (req, id) {
    var options = new HttpParams();
    if (req) {
        Object.keys(req).forEach(function (key) {
            if (key === 'tribId') {
                options = options.set('tribunalPremiereId.equals', id);
            }
            if (key !== 'sort') {
                if (key == 'criteria') {
                    if (req.criteria && req.criteria.length > 0) {
                        req.criteria.forEach(function (criterion) {
                            options = options.set(criterion.key, criterion.value);
                        });
                    }
                }
                else {
                    options = options.set(key, req[key]);
                }
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
        options.append('tribunalPremiereId.equals', id);
    }
    console.log('[options: ]', options);
    return options;
};
export var createRequestOptionForTribCourAp = function (req, id) {
    var options = new HttpParams();
    if (req) {
        Object.keys(req).forEach(function (key) {
            if (key === 'tribId') {
                options = options.set('tribunalCourAppelId.equals', id);
            }
            if (key !== 'sort') {
                if (key == 'criteria') {
                    if (req.criteria && req.criteria.length > 0) {
                        req.criteria.forEach(function (criterion) {
                            options = options.set(criterion.key, criterion.value);
                        });
                    }
                }
                else {
                    options = options.set(key, req[key]);
                }
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
    }
    console.log('[options: ]', options);
    return options;
};
export var createRequestOptionForTribCass = function (req, id) {
    var options = new HttpParams();
    if (req) {
        Object.keys(req).forEach(function (key) {
            if (key === 'tribId') {
                options = options.set('tribunalCassationId.equals', id);
            }
            if (key !== 'sort') {
                if (key == 'criteria') {
                    if (req.criteria && req.criteria.length > 0) {
                        req.criteria.forEach(function (criterion) {
                            options = options.set(criterion.key, criterion.value);
                        });
                    }
                }
                else {
                    options = options.set(key, req[key]);
                }
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
    }
    console.log('[options: ]', options);
    return options;
};
export var createRequestOptionForAffairesByLibFr = function (req) {
    var options = new HttpParams();
    if (req) {
        Object.keys(req).forEach(function (key) {
            // if(key === 'libFrCommune'){
            //   options = options.set('libFrCommune=',req.libFrCommune)
            // }
            // if(key === 'libFrProvince'){
            //   options = options.set('libFrProvince=',req.libFrProvince)
            // }
            // if(key === 'libFrRegion'){
            //   options = options.set('libFrRegion=',req.libFrRegion)
            // }
            if (key !== 'sort') {
                if (key == 'criteria') {
                    if (req.criteria && req.criteria.length > 0) {
                        req.criteria.forEach(function (criterion) {
                            options = options.set(criterion.key, criterion.value);
                        });
                    }
                }
                else {
                    options = options.set(key, req[key]);
                }
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
    }
    console.log('[options: ]', options);
    return options;
};
export var createRequestOptionForAffairesByLibAr = function (req) {
    var options = new HttpParams();
    if (req) {
        Object.keys(req).forEach(function (key) {
            // if(key === 'libArCommune'){
            //   options = options.set('libArCommune=',req.libArCommune)
            // }
            // if(key === 'libArProvince'){
            //   options = options.set('libArProvince=',req.libArProvince)
            // }
            // if(key === 'libArRegion'){
            //   options = options.set('libArRegion=',req.libArRegion)
            // }
            if (key !== 'sort') {
                if (key == 'criteria') {
                    if (req.criteria && req.criteria.length > 0) {
                        req.criteria.forEach(function (criterion) {
                            options = options.set(criterion.key, criterion.value);
                        });
                    }
                }
                else {
                    options = options.set(key, req[key]);
                }
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
    }
    console.log('[options: ]', options);
    return options;
};
export var createRequestOptionForDemandesByLibFr = function (req) {
    var options = new HttpParams();
    if (req) {
        Object.keys(req).forEach(function (key) {
            // if(key === 'libFrCommune'){
            //   options = options.set('libFrCommune=',req.libFrCommune)
            // }
            // if(key === 'libFrProvince'){
            //   options = options.set('libFrProvince=',req.libFrProvince)
            // }
            // if(key === 'libFrRegion'){
            //   options = options.set('libFrRegion=',req.libFrRegion)
            // }
            if (key !== 'sort') {
                if (key == 'criteria') {
                    if (req.criteria && req.criteria.length > 0) {
                        req.criteria.forEach(function (criterion) {
                            options = options.set(criterion.key, criterion.value);
                        });
                    }
                }
                else {
                    options = options.set(key, req[key]);
                }
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
    }
    console.log('[options: ]', options);
    return options;
};
export var createRequestOptionForDemandesByLibAr = function (req) {
    var options = new HttpParams();
    if (req) {
        Object.keys(req).forEach(function (key) {
            // if(key === 'libArCommune'){
            //   options = options.set('libArCommune=',req.libArCommune)
            // }
            // if(key === 'libArProvince'){
            //   options = options.set('libArProvince=',req.libArProvince)
            // }
            // if(key === 'libArRegion'){
            //   options = options.set('libArRegion=',req.libArRegion)
            // }
            if (key !== 'sort') {
                if (key == 'criteria') {
                    if (req.criteria && req.criteria.length > 0) {
                        req.criteria.forEach(function (criterion) {
                            options = options.set(criterion.key, criterion.value);
                        });
                    }
                }
                else {
                    options = options.set(key, req[key]);
                }
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
    }
    console.log('[options: ]', options);
    return options;
};
//# sourceMappingURL=request-util.js.map