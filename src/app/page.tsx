import homeImg from '../../public/home.jpg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    // <div>
    //   Home Page
    /* <div className="absolute -z-10 inset-0">
      <Image
      src={homeImg}
      alt="car factory"
      fill
      style={{objectFit:'cover'}}
      />
      </div> */

      /* <div className="flex flex-row">
        <Image height={600} width={800} src={homeImg} alt="asdf"/>
        <div>Buy our product</div>
      </div> */
    // </div>
    <Hero imgData={homeImg} imgAlt="car factory" title="Professional Cloud Hosting"/>
  );
}
