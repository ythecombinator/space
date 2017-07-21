//	Utilities
import {colors} from '../helpers/constants';

const Signature = ({name}) => (
    <div className="signature">

        {`— @${name}`}

        <style jsx>{`

            .signature {
                color: ${colors.signature};
                margin-top: 0.5em;
                margin-left: -30px;
                font-size: 1.5em;
                transition: all 250ms ease;
			}

            @media (max-width: 768px) {
                .signature {
                    text-align: center;
				}
			}

        `}</style>
    </div>
);

export default Signature;
