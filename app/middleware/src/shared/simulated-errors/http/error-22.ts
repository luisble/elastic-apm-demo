import SimulatedError from '../../../models/simulated-error';
import SimulatedErrorFactory from '../../../models/simulated-error-factory';

const CATEGORY: string = 'http';
const STATUS_CODE: number = 425;
const ERROR_MESSAGE: string = 'Too Early';

export default class _ extends SimulatedErrorFactory {
  category: string = CATEGORY;

  generate = () => {
    const error: SimulatedError = {
      name: 'Simulated Error: HTTP',
      category: CATEGORY,
      statusCode: STATUS_CODE,
      message: ERROR_MESSAGE,
    };

    return error;
  };
}