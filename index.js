const canvas = require('canvas');

/**
 * Generate an initials avatar
 * 
 * @param {String} initials avatar initials
 * @param {Object} options avatar customization options
 * @param {String} options.bgColor background color of avatar
 * @param {String} options.textColor avatar text color
 * 
 * @return {Buffer} image buffer
 */
module.exports = (initials, options = {}) => {
    const { height = 420, width = 420, bgColor = '#EBECF0', textColor = '#949494' } = options;

    // create a new canvas
    const avCanvas = canvas.createCanvas(width, height);
    const ctx = avCanvas.getContext('2d');

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, avCanvas.width, avCanvas.height);

    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '168px Arial';
    ctx.fillText(initials, avCanvas.width / 2, avCanvas.height / 2);

    return avCanvas.toBuffer();
}