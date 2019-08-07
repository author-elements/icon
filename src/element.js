class AuthorIconElement extends AuthorBaseElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.xhr = new XMLHttpRequest()

    this.UTIL.defineAttributes({
      src: {
        default: null
      }
    })

    this.UTIL.definePrivateMethods({
      inject: code => this.insertAdjacentHTML('beforeend', code)
    })

    this.UTIL.registerListener(this.xhr, 'load', evt => {
      console.log(evt)
      this.PRIVATE.inject(this.xhr.responseText)
    })

    this.UTIL.registerListeners(this, {
      connected: () => {
        if (this.children.length > 0) {
          return
        }

        if (!this.src) {
          return this.PRIVATE.inject(`<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Placeholder Icon</title>
            <desc>Copyright Author.io</desc>
            <g>
              <mask id="mask-2" fill="white">
                <path d="M0,0 L4.8,0 L4.8,24 L0,24 L0,0 Z M7.68,0 L10.56,0 L10.56,24 L7.68,24 L7.68,0 Z M13.44,0 L16.32,0 L16.32,24 L13.44,24 L13.44,0 Z M19.2,0 L24,0 L24,24 L19.2,24 L19.2,0 Z"></path>
              </mask>
              <g mask="url(#mask-2)">
                <mask id="mask-4" fill="white">
                  <path d="M0,0 L24,0 L24,4.8 L0,4.8 L0,0 Z M0,19.2 L24,19.2 L24,24 L0,24 L0,19.2 Z M0,13.44 L24,13.44 L24,16.32 L0,16.32 L0,13.44 Z M0,7.68 L24,7.68 L24,10.56 L0,10.56 L0,7.68 Z"></path>
                </mask>
                <path d="M3.84,0 L20.16,0 C22.2807734,-3.89579761e-16 24,1.71922656 24,3.84 L24,20.16 C24,22.2807734 22.2807734,24 20.16,24 L3.84,24 C1.71922656,24 2.5971984e-16,22.2807734 0,20.16 L0,3.84 C-2.5971984e-16,1.71922656 1.71922656,3.89579761e-16 3.84,0 Z M3.84,1.92 C2.77961328,1.92 1.92,2.77961328 1.92,3.84 L1.92,20.16 C1.92,21.2203867 2.77961328,22.08 3.84,22.08 L20.16,22.08 C21.2203867,22.08 22.08,21.2203867 22.08,20.16 L22.08,3.84 C22.08,2.77961328 21.2203867,1.92 20.16,1.92 L3.84,1.92 Z" fill="#545454" mask="url(#mask-4)"></path>
              </g>
            </g>
          </svg>`)
        }

        this.xhr.open('GET', this.src)
        this.xhr.send()
      }
    })
  }

  static get observedAttributes () {
    return ['src']
  }
}

customElements.define('author-icon', AuthorIconElement)

export default AuthorIconElement
