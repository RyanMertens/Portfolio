const errorContainerSelector = ".js-errors";

const errorHTML = `<div class="error">[[message]]</div>`;

/**
 * Render the error messages
 * @param {*} errorMessages
 */
export const render = (errorMessages) => {
    let string = '';
    errorMessages.forEach(element => {
        const errors = element.errors;

        string+=errorHTML.replace('[[message]]', errors[0]);
    });

    document.querySelector(errorContainerSelector).innerHTML = string;
};

