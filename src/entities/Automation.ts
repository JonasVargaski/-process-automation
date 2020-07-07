import { uuid } from 'uuidv4';

class Automation {
  id: string;

  type: number;

  description: string;

  constructor(type: number, description: string) {
    this.id = uuid();
    this.type = type;
    this.description = description;
  }
}

export default Automation;