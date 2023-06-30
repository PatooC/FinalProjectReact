const getChileanUniversities = () => {
    const promise = new Promise((resolve, reject) => {      
        fetch(`http://universities.hipolabs.com/search?country=Chile`)
        .then((UnisJSON) => {
            const Unis = UnisJSON.json()
            resolve(Unis);
        })
        .catch((error) => {
            reject(error)
        })
    })
    return promise
};

const getBrazilianUniversities = () => {
    const promise = new Promise((resolve, reject) => {      
        fetch(`http://universities.hipolabs.com/search?country=Brazil`)
        .then((UnisJSON) => {
            const Unis = UnisJSON.json()
            resolve(Unis);
        })
        .catch((error) => {
            reject(error)
        })
    })
    return promise
};

const getArgentinianUniversities = () => {
    const promise = new Promise((resolve, reject) => {      
        fetch(`http://universities.hipolabs.com/search?country=Argentina`)
        .then((UnisJSON) => {
            const Unis = UnisJSON.json()
            resolve(Unis);
        })
        .catch((error) => {
            reject(error)
        })
    })
    return promise
};

const getSpanishUniversities = () => {
    const promise = new Promise((resolve, reject) => {      
        fetch(`http://universities.hipolabs.com/search?country=Spain`)
        .then((UnisJSON) => {
            const Unis = UnisJSON.json()
            resolve(Unis);
        })
        .catch((error) => {
            reject(error)
        })
    })
    return promise
};

const getEnglishUniversities = () => {
    const promise = new Promise((resolve, reject) => {      
        fetch(`http://universities.hipolabs.com/search?country=united+kingdom`)
        .then((UnisJSON) => {
            const Unis = UnisJSON.json()
            resolve(Unis);
        })
        .catch((error) => {
            reject(error)
        })
    })
    return promise
};

const getAmericanUniversities = () => {
    const promise = new Promise((resolve, reject) => {      
        fetch(`http://universities.hipolabs.com/search?country=United+States`)
        .then((UnisJSON) => {
            const Unis = UnisJSON.json()
            resolve(Unis);
        })
        .catch((error) => {
            reject(error)
        })
    })
    return promise
};

const getChineseUniversities = () => {
    const promise = new Promise((resolve, reject) => {      
        fetch(`http://universities.hipolabs.com/search?country=China`)
        .then((UnisJSON) => {
            const Unis = UnisJSON.json()
            resolve(Unis);
        })
        .catch((error) => {
            reject(error)
        })
    })
    return promise
};

const getJapaneseUniversities = () => {
    const promise = new Promise((resolve, reject) => {      
        fetch(`http://universities.hipolabs.com/search?country=Japan`)
        .then((UnisJSON) => {
            const Unis = UnisJSON.json()
            resolve(Unis);
        })
        .catch((error) => {
            reject(error)
        })
    })
    return promise
};

const getFranceUniversities = () => {
    const promise = new Promise((resolve, reject) => {      
        fetch(`http://universities.hipolabs.com/search?country=France`)
        .then((UnisJSON) => {
            const Unis = UnisJSON.json()
            resolve(Unis);
        })
        .catch((error) => {
            reject(error)
        })
    })
    return promise
};


export { getChileanUniversities, getBrazilianUniversities, getArgentinianUniversities, getSpanishUniversities, getEnglishUniversities, getAmericanUniversities, getChineseUniversities, getJapaneseUniversities, getFranceUniversities }