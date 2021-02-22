import { InformationCard } from '@interfaces/information-card';
import { FunctionComponent, ReactElement } from 'react';
import { Carousel } from 'react-responsive-carousel';

interface InformationCardCarouselProps {
  informationCards: InformationCard[];
}

const InformationCardCarousel: FunctionComponent<InformationCardCarouselProps> = ({ informationCards }: InformationCardCarouselProps): ReactElement => (

  <Carousel infiniteLoop showArrows={true} showStatus={false} useKeyboardArrows>

    {

      informationCards.map((informationCard: InformationCard): JSX.Element => (

        <img alt={informationCard.title} key={informationCard.id} src={informationCard.image.url} />

      ))

    }

  </Carousel>

);

export default InformationCardCarousel;
