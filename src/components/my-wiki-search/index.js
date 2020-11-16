/**
 * The flipping-tile web component module.
 *
 * @author Daniel Persson <dp222jd@lnu.se>
 * @version 2.0.0
 */

/**
 * Define template.
 */
const template = document.createElement('template')
template.innerHTML = `
`

/**
* Defining the custom element my-wiki-search
*/
customElements.define('my-wiki-search',
    class extends HTMLElement {
        /**
         * Creates an instance of the current type
         */
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }

        /**
         * Called by the browser engine when an attribute changes.
         *
         * @param {string} name of the new attribute.
         * @param {any} oldValue of the attribute.
         * @param {any} newValue of the attribute. 
         */
        attributeChangedCallback(name, oldValue, newValue) {

        }

        /**
         * Called after the element is inserted into the dom. Event listeners are added here.
         */
        connectedCallback () {

        }

        /**
         * Called when the element is disconnected from the dom.
         */
        disconnectedCallback () {

        }
    })