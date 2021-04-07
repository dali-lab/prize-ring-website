import Image from 'next/image';
import styles from './styles.module.scss';

type SectionProps = {
  outlineImage: string,
  description: string,
  displayImage: string,
  orientation: 'left' | 'right',
  offset?: {
    top?: number,
    left?: number,
    right?: number,
    bottom?: number
  }
}

const Section = ({
  outlineImage, description, displayImage, orientation, offset = { top: 40, left: -40 },
}: SectionProps): JSX.Element => {
  return (
    <section className={styles.section} style={{ flexDirection: orientation === 'left' ? 'row' : 'row-reverse' }}>
      <div className={styles.display}>
        <Image src={displayImage} layout="responsive" width={1250} height={1500} />
      </div>

      <div className={styles.blob}>
        <Image src={outlineImage} layout="responsive" width={800} height={700} />
        <div className={styles.description} style={offset}>{description}</div>
      </div>
    </section>
  );
};

export default Section;
