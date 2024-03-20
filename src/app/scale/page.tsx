import Hero from '@/components/hero';
import scaleImg from '../../../public/scale.jpg';

export default function Performance(){
    return (
        <Hero
         imgData={scaleImg}
         imgAlt='welding'
         title="Scale you up to infinity."
        />
    );
}