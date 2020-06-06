/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language && language !== 'en' ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Documentation</h5>
            <span style={{color: 'rgba(255, 255, 255, 0.6)'}}>
              Coming soon...
            </span>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://gitter.im/lisk-dex/community" target="_blank" rel="noreferrer noopener">Project Chat</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/leasehold/lisk-dex-ui" target="_blank" rel="noreferrer noopener">GitHub: Lisk DEX UI</a>
            <a href="https://github.com/jondubois/lisk-dex" target="_blank" rel="noreferrer noopener">GitHub: Lisk DEX</a>
            <a
              className="github-button"
              href="https://github.com/jondubois/lisk-dex"
              data-icon="octicon-star"
              data-count-href="https://github.com/jondubois/lisk-dex/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
