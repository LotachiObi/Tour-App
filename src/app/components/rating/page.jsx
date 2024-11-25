import PropTypes from 'prop-types';
import { ListStarIcon } from 'lucide-react';

const Rating = ({ rate }) => {
    const validRate = Math.max(0, Math.min(5, Number(rate)));

    return (
        <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
                <ListStarIcon
                    key={index}
                    className={index < validRate ? 'filled' : 'empty'}
                />
            ))}
        </div>
    );
};

Rating.propTypes = {
    rate: PropTypes.number.isRequired, // Ensure rate is a required number
};

export default Rating;
