import { Element } from 'react-scroll';
import TitleBox from '../TitleBox';

type IntroductionBoxLayoutProps = {
  title: string;
  scrollTargetName: string;
  children: React.ReactNode;
};

export default function IntrodcutionBoxLayout({ title, scrollTargetName, children }: IntroductionBoxLayoutProps) {
  return (
    <Element name={scrollTargetName} className='py-20'>
      <TitleBox title={title} />
      {children}
    </Element>
  );
}
