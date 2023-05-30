import { HttpParams } from '@angular/common/http';
export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
      if (key !== 'sort') {
        if(key == 'criteria'){
          if (req.criteria && req.criteria.length > 0) {
            req.criteria.forEach((criterion) => {
              options = options.set(criterion.key, criterion.value);
            });
        }

        }else{
          options = options.set(key, req[key]);
        }
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }
  }

  return options;
};

export const createRequestOptionForTribPerms = (req?: any, id?:any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
      if(key === 'tribId'){
        options = options.set('tribunalPremiereId.equals',id)
      }
      if (key !== 'sort') {
        if(key == 'criteria'){
          if (req.criteria && req.criteria.length > 0) {
            req.criteria.forEach((criterion) => {
              options = options.set(criterion.key, criterion.value);
            });
        }

        }else{
          options = options.set(key, req[key]);
        }
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }
    options.append('tribunalPremiereId.equals',id)
  }
console.log('[options: ]',options);

  return options;
};


export const createRequestOptionForTribCourAp = (req?: any, id?:any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
      if(key === 'tribId'){
        options = options.set('tribunalCourAppelId.equals',id)
      }
      if (key !== 'sort') {
        if(key == 'criteria'){
          if (req.criteria && req.criteria.length > 0) {
            req.criteria.forEach((criterion) => {
              options = options.set(criterion.key, criterion.value);
            });
        }

        }else{
          options = options.set(key, req[key]);
        }
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }

  }
console.log('[options: ]',options);

  return options;
};

export const createRequestOptionForTribCass = (req?: any, id?:any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
      if(key === 'tribId'){
        options = options.set('tribunalCassationId.equals',id)
      }
      if (key !== 'sort') {
        if(key == 'criteria'){
          if (req.criteria && req.criteria.length > 0) {
            req.criteria.forEach((criterion) => {
              options = options.set(criterion.key, criterion.value);
            });
        }

        }else{
          options = options.set(key, req[key]);
        }
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }

  }
console.log('[options: ]',options);

  return options;
};

export const createRequestOptionForAffairesByLibFr = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
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
        if(key == 'criteria'){
          if (req.criteria && req.criteria.length > 0) {
            req.criteria.forEach((criterion) => {
              options = options.set(criterion.key, criterion.value);
            });
        }

        }else{
          options = options.set(key, req[key]);
        }
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }

  }
console.log('[options: ]',options);

  return options;
};

export const createRequestOptionForAffairesByLibAr = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
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
        if(key == 'criteria'){
          if (req.criteria && req.criteria.length > 0) {
            req.criteria.forEach((criterion) => {
              options = options.set(criterion.key, criterion.value);
            });
        }

        }else{
          options = options.set(key, req[key]);
        }
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }

  }
console.log('[options: ]',options);

  return options;
};

export const createRequestOptionForDemandesByLibFr = (req?: any): HttpParams => {
	let options: HttpParams = new HttpParams();

	if (req) {
	  Object.keys(req).forEach(key => {
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
		  if(key == 'criteria'){
			if (req.criteria && req.criteria.length > 0) {
			  req.criteria.forEach((criterion) => {
				options = options.set(criterion.key, criterion.value);
			  });
		  }

		  }else{
			options = options.set(key, req[key]);
		  }
		}
	  });

	  if (req.sort) {
		req.sort.forEach((val: string) => {
		  options = options.append('sort', val);
		});
	  }

	}
  console.log('[options: ]',options);

	return options;
  };

  export const createRequestOptionForDemandesByLibAr = (req?: any): HttpParams => {
	let options: HttpParams = new HttpParams();

	if (req) {
	  Object.keys(req).forEach(key => {
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
		  if(key == 'criteria'){
			if (req.criteria && req.criteria.length > 0) {
			  req.criteria.forEach((criterion) => {
				options = options.set(criterion.key, criterion.value);
			  });
		  }

		  }else{
			options = options.set(key, req[key]);
		  }
		}
	  });

	  if (req.sort) {
		req.sort.forEach((val: string) => {
		  options = options.append('sort', val);
		});
	  }

	}
  console.log('[options: ]',options);

	return options;
  };
