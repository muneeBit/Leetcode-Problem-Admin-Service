const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {

    const turndownService = new TurndownService();

    // 1. Convert Markdown to html
    const convertedHtml = marked.parse(markdownContent);

    console.log("converted html: ", convertedHtml);

    

    // 2.Sanitize html

    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags
    });

    console.log("sanitized html: ", sanitizedHtml);

    // 3. Convert Sanitized html back to markdown

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    console.log("sanitized Markdown: ", sanitizedMarkdown)

    

    

    return sanitizedMarkdown;
}
 


module.exports = sanitizeMarkdownContent ;  