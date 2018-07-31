
const SVGO = require('svgo'); // https://github.com/svg/svgo

const svgo = new SVGO({
    plugins: [
        { cleanupListOfValues: { floatPrecision: 2, leadingZero: false } },
        { cleanupNumericValues: { floatPrecision: 2, leadingZero: false } },
        { convertPathData: { floatPrecision: 2, leadingZero: false } },
        { convertColors: { shorthex: false, shortname: false } },
        { convertShapeToPath: { convertArcs: true } },
        { removeRasterImages: true },
        { removeScriptElement: true },
        { removeXMLNS: true },
        { removeViewBox: false },
        { sortAttrs: true },
        { moveElemsAttrsToGroup: false },
        { moveGroupAttrsToElems: true }
    ]
});

module.exports = function(svgString) {
    return new Promise((resolve, reject) => {
        svgo.optimize(svgString, { input: 'string' }).then(result => {
            resolve(result.data);
        }).catch(err => {
            reject(err);
        });
    });
};