import Hero from '@/components/hero';
import reliabilityImg from '../../../public/reliability.jpg';

export default function Performance(){
    return (
        <Hero
         imgData={reliabilityImg}
         imgAlt='welding'
         title="Super high reliability hosting."
        />
    );
}