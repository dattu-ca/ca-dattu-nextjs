
const sanitize = (strings: TemplateStringsArray, ...values: Array<string | number>) => {
    const sanitizedValues = values.map((value) =>
        // Replacing the common XSS attack characters
        String(value).replace(/[&<>"']/g, (char) => {
            switch (char) {
                case '&':
                    return '&amp;';
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '"':
                    return '&quot;';
                case "'":
                    return '&#39;';
                default:
                    return char; 
            }
        })
    );

    return strings.reduce((result, string, i) => {
        return result + string + (sanitizedValues[i] || '');
    }, '');
};

export {
    sanitize
}