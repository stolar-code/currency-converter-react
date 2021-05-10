import { StyledResult } from "./styled";

const Result = ({ result }) => {
    return (
        <StyledResult>
            {!!result && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;EUR&nbsp;=&nbsp;

                    <strong>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </strong>
                </>
            )}
        </StyledResult>
    )
};

export default Result;