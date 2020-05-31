/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title} <a
          className="github-button"
          href="https://github.com/jondubois/lisk-dex"
          data-icon="octicon-star"
          data-count-href="https://github.com/jondubois/lisk-dex/stargazers"
          data-show-count="true"
          data-count-aria-label="# stargazers on GitHub"
          data-size="large"
          data-text="Star"
          aria-label="Star this project on GitHub">
        </a>
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('getting-started')}>Get started</Button>
            <Button
              href="https://github.com/jondubois/lisk-dex"
              target="_blank"
              rel="noreferrer noopener"
            >Browse GitHub</Button>
            <Button
              href="https://gitter.im/lisk-dex/community"
              target="_blank"
              rel="noreferrer noopener"
            >Chat on Gitter</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const BlockWithHeading = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <h1 className="blockHeading" align="center">{props.heading}</h1>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Trades typically go through within one or two minutes. The LDEX UI application displays progress indicators while orders are pending and after they have been matched.',
            image: `${baseUrl}img/icons/unlimited-channels.png`,
            imageAlign: 'top',
            title: 'Fast',
          },
          {
            content: 'Implemented via a decentralized 2-way peg mechanism. Each DEX market is made up of between 10 to 15 members/operators who sign-off on cross-chain trades. Trades only go through when if have majority approval.',
            image: `${baseUrl}img/icons/deploy-containers.png`,
            imageAlign: 'top',
            title: 'Decentralized',
          },
          {
            content: 'The full cross-chain trading history is visible on both affected blockchains. Cross-chain trades can be traced across different blockchains and historical prices can also be determined trustlessly.',
            image: `${baseUrl}img/icons/scale.png`,
            imageAlign: 'top',
            title: 'Transparent',
          },
          {
            content: 'Trades are processed chain-to-chain without centralized intermediaries. The pseudo-anonymity provided by the underlying blockchains is maintained.',
            image: `${baseUrl}img/icons/delivery-order.png`,
            imageAlign: 'top',
            title: 'Pseudo-anonymous',
          },
          {
            content: 'From the user\'s perspective, LDEX provides all of the key features of a regular exchange. Its decentralized order book accepts both standard limit orders and market orders.',
            image: `${baseUrl}img/icons/pressure.png`,
            imageAlign: 'top',
            title: 'User friendly',
          },
          {
            content: 'DEX members receive a share of trading fees. DEX members who fail to sign valid trades will not receive any dividends from those trades. Trades only go through if they have been signed by the majority members.',
            image: `${baseUrl}img/icons/authentication.png`,
            imageAlign: 'top',
            title: 'Creates the right incentives',
          },
          {
            content: 'Cross-chain transfers are derived from the data of the underlying blockchains. This leaves no room for interpretation. The underlying blockchains can be re-processed any number of times and the output will always be consistent (and idempotent).',
            image: `${baseUrl}img/icons/breaks-throttle.png`,
            imageAlign: 'top',
            title: 'Deterministic',
          },
          {
            content: 'All the code behind LDEX is fully open source. Our goal is to create a decentralized free market which is open to all participants. We aim to kickstart an ecosystem which will expand far beyond our own capacity.',
            image: `${baseUrl}img/icons/police-access-control.png`,
            imageAlign: 'top',
            title: 'Open source',
          },
        ]}
      </Block>
    );


      const ClientLibraries = () => (
          <BlockWithHeading layout="fourColumn" background={'light'} heading={'Client Libraries'}>
              {[
                  {
                      image: 'https://image.flaticon.com/icons/svg/136/136530.svg',
                      imageAlign: 'top',
                      title: 'Javascript Client',
                      imageLink: 'https://github.com/SocketCluster/socketcluster-client'
                  },
                  {
                      image: 'https://image.flaticon.com/icons/svg/226/226770.svg',
                      imageAlign: 'top',
                      title: 'Java/Android Client',
                      imageLink: 'https://github.com/sacOO7/socketcluster-client-java'
                  },
                  {
                      image: 'https://image.flaticon.com/icons/svg/180/180867.svg',
                      imageAlign: 'top',
                      title: 'Python Client',
                      imageLink: 'https://github.com/sacOO7/socketcluster-client-python'
                  },
                  {
                      image: 'https://image.flaticon.com/icons/svg/376/376105.svg',
                      imageAlign: 'top',
                      title: 'DotNet Client',
                      imageLink: 'https://github.com/sacOO7/SocketclusterClientDotNet'
                  },
                  {
                      image: 'https://github.com/egonelbre/gophers/raw/master/.thumb/animation/gopher-dance-long-3x.gif',
                      imageAlign: 'top',
                      title: 'Go Client',
                      imageLink: 'https://github.com/sacOO7/socketcluster-client-go'
                  },
                  {
                      image: 'https://image.flaticon.com/icons/svg/919/919833.svg',
                      imageAlign: 'top',
                      title: 'Swift/iOS Client',
                      imageLink: 'https://github.com/sacOO7/socketcluster-client-swift'
                  },
                  {
                      image: 'https://image.flaticon.com/icons/svg/919/919842.svg',
                      imageAlign: 'top',
                      title: 'Ruby client',
                      imageLink: 'https://github.com/OpenSocket/socketcluster-client-ruby'
                  },
                  {
                      image: 'https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png',
                      imageAlign: 'top',
                      title: 'Unity Client',
                      imageLink: 'https://github.com/sacOO7/socketcluster-client-unity'
                  },
              ]}
          </BlockWithHeading>
      );
    // const Showcase = () => {
    //   const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    //   const langPart = `${language ? `${language}/` : ''}`;
    //   const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    //
    //   return (
    //     <div className="productShowcaseSection paddingBottom">
    //       <a href={docUrl('deploying-to-kubernetes.html')}>
    //         <img style={{width: '500px', marginTop: '100px'}} src={`${baseUrl}img/kubernetes-horizontal.png`} />
    //       </a>
    //     </div>
    //   );
    // };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="splashSubsection">
        <div className="splashSubsectionContent">
          <div className="splashSubsectionCaption" style={{marginRight: '15px'}}>A project by</div>
            <a className="splashSubsectionLink" href={`https://leasehold.io`} target="_blank">
              <div className="splashSubsectionItem">
              <img src="img/leasehold-logo-with-text-white.png" />
              </div>
            </a>
          </div>
        </div>
        <div className="mainContainer">
          <Features />
        </div>
          <div className="mainContainer">
              <ClientLibraries />
          </div>
      </div>
    );
  }
}

module.exports = Index;
