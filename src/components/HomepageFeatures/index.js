import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy To Work With',
    Svg: require('@site/static/img/favicon.svg').default,
    description: (
      <>
        Jim is well know for being easy to work with. Teams and clients both enjoy his ability to communicate clearly without blame or complaints. 
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/favicon.svg').default,
    description: (
      <>
        Jim helps teams focus on what matters most by providing clear communication and a collaborative approach. He brings deep human experience and wisdom to every project. 
      </>
    ),
  },
  {
    title: 'Highly Technical',
    Svg: require('@site/static/img/favicon.svg').default,
    description: (
      <>
        Jim has a strong background in technical subjects, allowing him to bridge the gap between complex technical concepts and clear communication for diverse audiences. He can work in a variety of technical environments, including software development, engineering, and scientific research.
      </>
    ),
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
