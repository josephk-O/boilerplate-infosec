// netlify/functions/index.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    // Path to your HTML file
    const filePath = path.join(__dirname, '..', '..', 'views', 'index.html');
    try {
        const html = fs.readFileSync(filePath, 'utf-8');
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'text/html' },
            body: html
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Internal Server Error: Could not load HTML file'
        };
    }
};
