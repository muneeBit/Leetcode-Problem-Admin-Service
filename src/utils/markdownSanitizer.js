const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {

    const turndownService = new TurndownService();

    // 1. Convert Markdown to html
    const convertedHtml = marked.parse(markdownContent);


    

    // 2.Sanitize html

    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
    });

    

    // 3. Convert Sanitized html back to markdown

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    

    

    

    return sanitizedMarkdown;
}
 


module.exports = sanitizeMarkdownContent ;  